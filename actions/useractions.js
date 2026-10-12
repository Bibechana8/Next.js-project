// "use server";
// import esewa from "esewa-nodejs-sdk";
// import payment from "../models/payment";
// import connectDb from "../db/connectDb";
// import user from "../models/user";

// export const initiate = async (amount, to_username, paymentform) => {
//   await connectDb();

//   const instance = new esewa({
//     clientId: process.env.ESEWA_CLIENT_ID,
//     clientSecret: process.env.ESEWA_CLIENT_SECRET,
//     environment: process.env.ESEWA_ENVIRONMENT,
//   });
// };
// const options = {
//     amount: Number.parseInt(amount),
//     currency: "NPR",
// }
// const x = await instance.orders.create(options)
// await payment.create({oid: x.orderId, amount: amount, to_username: to_username, name: paymentform.name,message: paymentform.message})
// return x;
"use server";

import esewa from "../lib/esewa";
import payment from "../app/models/Payment";
import connectDb from "../app/db/connectDb";

export const initiate = async (amount, to_user, paymentform = {}) => {
  const recipient = String(to_user ?? "").trim();

  if (!recipient) {
    throw new Error("Payment validation failed: to_user is required.");
  }

  const numericAmount = Number(amount);

  if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
    throw new Error("Payment validation failed: amount must be a positive number.");
  }

  await connectDb();

  const instance = new esewa({
    clientId: process.env.ESEWA_CLIENT_ID,
    clientSecret: process.env.ESEWA_CLIENT_SECRET,
    environment: process.env.ESEWA_ENVIRONMENT,
  });

  const order = await instance.orders.create({
    amount: numericAmount,
    productId: `${recipient}-${Date.now()}`,
  });

  const payload = {
    oid: order.orderId,
    amount: numericAmount,
    to_user: recipient,
    name: String(paymentform?.name ?? "Guest").trim() || "Guest",
    message: String(paymentform?.message ?? "").trim(),
  };

  await payment.create(payload);

  return order;
};
