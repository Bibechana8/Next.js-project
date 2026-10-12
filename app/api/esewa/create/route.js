import { NextResponse } from "next/server";
import Esewa from "../../../../lib/esewa";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      amount,
      orderId,
      productId,
      taxAmount = 0,
      serviceCharge = 0,
      deliveryCharge = 0,
    } = body;

    if (!amount) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Amount is required",
        },
        { status: 400 }
      );
    }

    if (!orderId && !productId) {
      return NextResponse.json(
        {
          success: false,
          message:
            "orderId is required",
        },
        { status: 400 }
      );
    }

    const esewa =
      new Esewa();

    const payment =
      await esewa.orders.create({
        amount,
        orderId,
        productId,
        taxAmount,
        serviceCharge,
        deliveryCharge,
      });

    return NextResponse.json({
      success: true,
      ...payment,
    });
  } catch (error) {
    console.error(
      "eSewa create error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error.message ||
          "Could not create payment",
      },
      { status: 500 }
    );
  }
}
