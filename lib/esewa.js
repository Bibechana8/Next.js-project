import crypto from "crypto";

const ESEWA_URLS = {
  test: "https://rc-epay.esewa.com.np/api/epay/main/v2/form",
  production: "https://epay.esewa.com.np/api/epay/main/v2/form",
};

class Esewa {
  constructor(options = {}) {
    this.environment = String(
      options.environment ||
        process.env.ESEWA_ENVIRONMENT ||
        "test"
    ).toLowerCase();

    this.productCode =
      options.productCode ||
      process.env.ESEWA_PRODUCT_CODE ||
      "EPAYTEST";

    this.secretKey =
      options.secretKey ||
      process.env.ESEWA_SECRET_KEY ||
      "";

    this.baseUrl =
      ESEWA_URLS[this.environment] ||
      ESEWA_URLS.test;

    if (!this.secretKey) {
      throw new Error("Missing ESEWA_SECRET_KEY");
    }
  }

  generateSignature(totalAmount, transactionUuid) {
    const message =
      `total_amount=${totalAmount},` +
      `transaction_uuid=${transactionUuid},` +
      `product_code=${this.productCode}`;

    return crypto
      .createHmac("sha256", this.secretKey)
      .update(message)
      .digest("base64");
  }

  buildPayment({
    amount,
    orderId,
    successUrl,
    failureUrl,
    taxAmount = 0,
    serviceCharge = 0,
    deliveryCharge = 0,
  }) {
    const numericAmount = Number(amount);
    const numericTax = Number(taxAmount);
    const numericServiceCharge = Number(serviceCharge);
    const numericDeliveryCharge = Number(deliveryCharge);

    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
      throw new Error(
        "Amount must be a positive number."
      );
    }

    if (!orderId) {
      throw new Error("orderId is required.");
    }

    // eSewa allows alphanumeric characters and hyphens
    const transactionUuid = String(orderId)
      .replace(/[^a-zA-Z0-9-]/g, "-");

    const amountValue = numericAmount.toFixed(2);
    const taxValue = numericTax.toFixed(2);
    const serviceChargeValue =
      numericServiceCharge.toFixed(2);
    const deliveryChargeValue =
      numericDeliveryCharge.toFixed(2);

    const totalAmount = (
      numericAmount +
      numericTax +
      numericServiceCharge +
      numericDeliveryCharge
    ).toFixed(2);

    const signedFieldNames =
      "total_amount,transaction_uuid,product_code";

    const signature = this.generateSignature(
      totalAmount,
      transactionUuid
    );

    return {
      action: this.baseUrl,

      fields: {
        amount: amountValue,
        tax_amount: taxValue,
        total_amount: totalAmount,

        transaction_uuid: transactionUuid,

        product_code: this.productCode,

        product_service_charge:
          serviceChargeValue,

        product_delivery_charge:
          deliveryChargeValue,

        success_url: successUrl,
        failure_url: failureUrl,

        signed_field_names:
          signedFieldNames,

        signature,
      },
    };
  }

  get orders() {
    return {
      create: async ({
        amount,
        orderId,
        productId,
        successUrl,
        failureUrl,
        taxAmount = 0,
        serviceCharge = 0,
        deliveryCharge = 0,
      }) => {
        const appBaseUrl =
          process.env.NEXT_PUBLIC_APP_URL ||
          "http://localhost:3000";

        const finalOrderId =
          orderId ||
          productId ||
          `esewa-${Date.now()}`;

        const finalSuccessUrl =
          successUrl ||
          `${appBaseUrl}/api/esewa/success`;

        const finalFailureUrl =
          failureUrl ||
          `${appBaseUrl}/api/esewa/failure`;

        const payment = this.buildPayment({
          amount,
          orderId: finalOrderId,
          successUrl: finalSuccessUrl,
          failureUrl: finalFailureUrl,
          taxAmount,
          serviceCharge,
          deliveryCharge,
        });

        return {
          orderId: finalOrderId,
          amount: Number(amount),

          action: payment.action,

          fields: payment.fields,

          paymentUrl: payment.action,
          checkoutUrl: payment.action,
        };
      },
    };
  }
}

export default Esewa;
