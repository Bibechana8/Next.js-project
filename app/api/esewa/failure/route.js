// import { NextResponse } from "next/server";
import Payment from "../../../models/Payment";
import connectDb from "../../../db/connectDb";

export async function GET(request) {
  try {
    await connectDb();

    const { searchParams } =
      new URL(request.url);

    const pid = searchParams.get("pid");
    const refId = searchParams.get("refId");

    let orderId = pid || refId;

    // eSewa V2 may return Base64 encoded data
    const encodedData =
      searchParams.get("data");

    if (encodedData) {
      try {
        const decoded = Buffer.from(
          encodedData,
          "base64"
        ).toString("utf-8");

        const data = JSON.parse(decoded);

        console.log(
          "eSewa failure data:",
          data
        );

        orderId =
          data.transaction_uuid ||
          orderId;
      } catch (error) {
        console.error(
          "Could not decode eSewa failure data:",
          error
        );
      }
    }

    if (orderId) {
      await Payment.findOneAndUpdate(
        { oid: orderId },
        {
          $set: {
            done: false,
            updatedAt: new Date(),
          },
        }
      );
    }

    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Payment Failed</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>

        <body
          style="
            margin:0;
            min-height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            background:#f8fafc;
            font-family:Arial,sans-serif;
          "
        >
          <div
            style="
              background:white;
              border-radius:12px;
              padding:40px;
              box-shadow:0 10px 30px rgba(0,0,0,0.08);
              text-align:center;
              max-width:520px;
            "
          >
            <h1 style="color:#ef4444;">
              Payment Failed
            </h1>

            <p style="color:#64748b;">
              Your eSewa payment was not completed.
            </p>

            <p style="color:#64748b;">
              Please try again or contact support.
            </p>

            <a
              href="/"
              style="
                display:inline-block;
                margin-top:20px;
                padding:12px 20px;
                background:#111827;
                color:white;
                text-decoration:none;
                border-radius:8px;
              "
            >
              Go Back
            </a>
          </div>
        </body>
      </html>
      `,
      {
        headers: {
          "Content-Type":
            "text/html; charset=utf-8",
        },
      }
    );
  } catch (error) {
    console.error(
      "eSewa failure route error:",
      error
    );

    return new NextResponse(
      "Payment failed",
      { status: 500 }
    );
  }
}
