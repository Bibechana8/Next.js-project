// import { NextResponse } from "next/server";
// import Payment from "../../../models/Payment";
// import connectDb from "../../../db/connectDb";

// export async function GET(request) {
//   await connectDb();

//   const { searchParams } = new URL(request.url);
//   const oid = searchParams.get("oid") || searchParams.get("pid") || searchParams.get("refId");

//   if (oid) {
//     await Payment.findOneAndUpdate(
//       { oid },
//       { $set: { done: true, updatedAt: new Date() } },
//       { new: true }
//     );
//   }

//   return new NextResponse(
//     `
//       <html>
//         <head><title>Payment Successful</title></head>
//         <body style="font-family: Arial, sans-serif; display: grid; place-items: center; min-height: 100vh; background: #f8fafc;">
//           <div style="background: white; border-radius: 12px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); text-align: center; max-width: 520px;">
//             <h1 style="color: #0f172a; margin-bottom: 12px;">Payment Successful</h1>
//             <p style="color: #475569; margin: 0;">Your eSewa payment has been processed successfully.</p>
//             <p style="color: #64748b; margin-top: 18px;">You can close this page and return to the app.</p>
//           </div>
//         </body>
//       </html>
//     `,
//     { headers: { "Content-Type": "text/html; charset=utf-8" } }
//   );
// }
import crypto from "crypto";
import { NextResponse } from "next/server";

import Payment from "../../../models/Payment";
import connectDb from "../../../db/connectDb";

function verifyEsewaResponse(data) {
  const secretKey =
    process.env.ESEWA_SECRET_KEY;

  if (!secretKey) {
    throw new Error(
      "Missing ESEWA_SECRET_KEY"
    );
  }

  const signedFieldNames =
    data.signed_field_names;

  if (!signedFieldNames) {
    return false;
  }

  const message = signedFieldNames
    .split(",")
    .map(
      (field) =>
        `${field}=${data[field]}`
    )
    .join(",");

  const expectedSignature =
    crypto
      .createHmac(
        "sha256",
        secretKey
      )
      .update(message)
      .digest("base64");

  const receivedSignature =
    data.signature || "";

  return (
    expectedSignature ===
    receivedSignature
  );
}

function decodeEsewaData(encodedData) {
  return JSON.parse(
    Buffer.from(
      encodedData,
      "base64"
    ).toString("utf-8")
  );
}

export async function GET(request) {
  try {
    await connectDb();

    const { searchParams } =
      new URL(request.url);

    const encodedData =
      searchParams.get("data");

    if (!encodedData) {
      return NextResponse.redirect(
        new URL(
          "/api/esewa/failure?reason=missing-data",
          request.url
        )
      );
    }

    const data =
      decodeEsewaData(encodedData);

    console.log(
      "eSewa success response:",
      data
    );

    // Verify signature
    const valid =
      verifyEsewaResponse(data);

    if (!valid) {
      console.error(
        "Invalid eSewa signature"
      );

      return NextResponse.redirect(
        new URL(
          "/api/esewa/failure?reason=invalid-signature",
          request.url
        )
      );
    }

    // eSewa must report COMPLETE
    if (data.status !== "COMPLETE") {
      return NextResponse.redirect(
        new URL(
          `/api/esewa/failure?reason=${encodeURIComponent(
            data.status || "unknown"
          )}`,
          request.url
        )
      );
    }

    const orderId =
      data.transaction_uuid;

    if (!orderId) {
      throw new Error(
        "Missing transaction_uuid"
      );
    }

    /*
     * Find the payment using your existing
     * Payment model.
     */
    const payment =
      await Payment.findOneAndUpdate(
        { oid: orderId },
        {
          $set: {
            done: true,
            updatedAt: new Date(),

            // Uncomment these ONLY if these
            // fields exist in your Payment schema:
            //
            // transactionId:
            //   data.transaction_code,
            //
            // esewaTransactionCode:
            //   data.transaction_code,
          },
        },
        {
          new: true,
        }
      );

    if (!payment) {
      console.error(
        "Payment not found:",
        orderId
      );

      return NextResponse.redirect(
        new URL(
          "/api/esewa/failure?reason=payment-not-found",
          request.url
        )
      );
    }

    console.log(
      "Payment marked as completed:",
      orderId
    );

    /*
     * Redirect to your frontend.
     */
    const successUrl =
      new URL(
        "/payment/success",
        request.url
      );

    successUrl.searchParams.set(
      "orderId",
      orderId
    );

    if (data.transaction_code) {
      successUrl.searchParams.set(
        "transactionId",
        data.transaction_code
      );
    }

    return NextResponse.redirect(
      successUrl
    );
  } catch (error) {
    console.error(
      "eSewa success error:",
      error
    );

    return NextResponse.redirect(
      new URL(
        "/api/esewa/failure?reason=verification-error",
        request.url
      )
    );
  }
}

