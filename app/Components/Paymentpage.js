// "use client"
// import React,{useState} from 'react'
// import Script from 'next/script'
// import {initiate} from '@/actions/useractions'
// import { useSession } from 'next-auth/react'

// const Paymentpage = ({username}) => {
//     const { data: session } = useSession();
//     const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" });

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setPaymentform((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     };

//     const pay = async (amount) => {
//       try {
//         const recipient = username || session?.user?.name || session?.user?.username;

//         if (!recipient) {
//           alert("Recipient username is required to continue.");
//           return;
//         }

//         const a = await initiate(amount, recipient, paymentform);
//         const orderId = a?.orderId || a?.Id || a?.oid || "";
//         const paymentUrl = a?.paymentUrl || a?.checkoutUrl;

//         console.log("Payment initiated:", a);

//         if (paymentUrl) {
//           window.location.href = paymentUrl;
//           return;
//         }

//         alert(`Order created: ${orderId}`);
//       } catch (err) {
//         console.error(err);
//         alert(err.message || "Failed to initiate payment. Check the console for details.");
//       }
//     };
     
//   return (
//    <>
//    <Script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js" />
//   <div className='cover w-full bg-red-50 relative'>
//       <img className='w-full h-[350] object-cover' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/20.gif?token-hash=1Kbnq1kmdaOuXBdeATyNc6HRB1AM8eoyjiAg29yBoF4%3D&token-time=1788480000" alt="Event" />
//       <div className="absolute -bottom-20 right-[46%] border-white border-2 rounded-full">
//         <img className="rounded-full" width={150} height={150} src="https://media.4-paws.org/9/c/9/7/9c97c38666efa11b79d94619cc1db56e8c43d430/Molly_006-2829x1886-2726x1886-1920x1328.jpg" alt='' />
//       </div>
//     </div>
//     <div className="info flex justify-center items-center my-24 flex-col gap-2 ">
//       <div className="font-bold text-lg text-white">

//       @{username}Bibechana Poudel
//       </div>
//       <div className=" text-lg text-slate-400">
//         Creating Animated art for VTT&apos;s
 
//     </div>
//     <div className=" text-lg text-slate-400">
// 26,626 .members113 .Posts$16 .680/release
//     </div>
//     <div className="payment flex gap-3 w-[80%] mt-11 ">
//     <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
//     <h2 className='text-2xl font-bold my-5'>Supporters</h2>
//       <ul className='mx-5 text-lg-3xl'>
//         <li className="my-4 flex gap-2 items-center">
//           <img width={33} height={33} className="rounded-full" src="/avatar.gif" alt="avatar" />
//           <span>
//              Shubam donated <span className="font-bold">$10 </span>with a message &quot;I support you girl. lot&apos;s of ❤️&quot;
//           </span>
          
//           </li>
//            <li className="my-4 flex gap-2 items-center">
//           <img width={33} height={33} className="rounded-full" src="/avatar.gif" alt="avatar" />
//           <span>
//              Shubam donated <span className="font-bold">$10</span>with a message &quot;I support you girl. lot&apos;s of ❤️&quot;
//           </span>
          
//           </li>
//            <li className="my-4 flex gap-2 items-center">
//           <img width={33} height={33} className="rounded-full" src="/avatar.gif" alt="avatar" />
//           <span>
//              Shubam donated <span className="font-bold">$10 </span>with a message &quot;I support you girl. lot&apos;s of ❤️&quot;
//           </span>
          
//           </li>
//            <li className="my-4 flex gap-2 items-center">
//           <img width={33} height={33} className="rounded-full" src="/avatar.gif" alt="avatar" />
//           <span>
//              Shubam donated <span className="font-bold">$10 </span>with a message &quot;I support you girl. lot&apos;s of ❤️&quot;
//           </span>
          
//           </li>
        
//       </ul>
//     </div>
//      <div className="Make payments w-1/2  bg-slate-900 rounded-lg text-white p-10">
//       <h2 className='text-2xl font-bold my-5'>Make Payments</h2>
//       <div className='flex gap-2 flex-col'>
//         <div>
//       <input name="name" onChange={handleChange} value={paymentform.name} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter your Name' />  
//         </div> 
//       <input name="message" onChange={handleChange} value={paymentform.message} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter your Message' />
//       <input name="amount" onChange={handleChange} value={paymentform.amount} type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter your Amount' />
//       <button type="button" onClick={() => pay(paymentform.amount)} className=" text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Pay</button>
//       </div>
//      {/* or choose from these amounts */}
//      <div className="flex gap-2 mt-5">
//       <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(1000)}>pay r10</button>
//       <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(2000)}>pay r20</button>
//       <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(5000)}>pay r50</button>
//       <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(1000)}>pay r100</button>

//      </div>
//     </div>
//     </div>
//     </div>
 
//    </>
//   )

// }

// export default Paymentpage
"use client";

import React, { useState } from "react";
import { initiate } from "@/actions/useractions";
import { useSession } from "next-auth/react";

const Paymentpage = ({ username }) => {
  const { data: session } = useSession();

  const [paymentform, setPaymentform] = useState({
    name: "",
    message: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPaymentform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const pay = async (amount) => {
    try {
      setLoading(true);

      const recipient =
        username ||
        session?.user?.name ||
        session?.user?.username;

      if (!recipient) {
        alert(
          "Recipient username is required to continue."
        );
        setLoading(false);
        return;
      }

      if (!amount || Number(amount) <= 0) {
        alert("Please enter a valid amount.");
        setLoading(false);
        return;
      }

      /*
       * This calls your existing server action.
       *
       * IMPORTANT:
       * Your initiate() function must return:
       *
       * {
       *   orderId: "...",
       *   action: "https://rc-epay.esewa.com.np/...",
       *   fields: {
       *      amount: "...",
       *      tax_amount: "...",
       *      total_amount: "...",
       *      transaction_uuid: "...",
       *      product_code: "...",
       *      product_service_charge: "...",
       *      product_delivery_charge: "...",
       *      success_url: "...",
       *      failure_url: "...",
       *      signed_field_names: "...",
       *      signature: "..."
       *   }
       * }
       */

      const result = await initiate(
        amount,
        recipient,
        paymentform
      );

      console.log(
        "eSewa payment response:",
        result
      );

      if (!result) {
        throw new Error(
          "No payment response received."
        );
      }

      /*
       * New eSewa V2 payment flow
       *
       * DO NOT use:
       *
       * window.location.href = paymentUrl
       *
       * eSewa V2 requires POST.
       */

      const action =
        result.action ||
        result.paymentUrl ||
        result.checkoutUrl;

      const fields = result.fields;

      if (!action) {
        throw new Error(
          "eSewa payment URL/action was not returned."
        );
      }

      if (!fields) {
        throw new Error(
          "eSewa payment fields were not returned."
        );
      }

      /*
       * Create POST form
       */
      const form =
        document.createElement("form");

      form.method = "POST";
      form.action = action;

      /*
       * Add eSewa fields
       */
      Object.entries(fields).forEach(
        ([key, value]) => {
          const input =
            document.createElement("input");

          input.type = "hidden";
          input.name = key;
          input.value = value;

          form.appendChild(input);
        }
      );

      /*
       * Add form to page and submit
       */
      document.body.appendChild(form);

      form.submit();
    } catch (error) {
      console.error(
        "Payment error:",
        error
      );

      alert(
        error?.message ||
          "Failed to initiate payment. Please try again."
      );

      setLoading(false);
    }
  };

  return (
    <>
      <div className="cover w-full bg-red-50 relative">
        <img
          className="w-full h-[350px] object-cover"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/20.gif?token-hash=1Kbnq1kmdaOuXBdeATyNc6HRB1AM8eoyjiAg29yBoF4%3D&token-time=1788480000"
          alt="Event"
        />

        <div className="absolute -bottom-20 right-[46%] border-white border-2 rounded-full">
          <img
            className="rounded-full"
            width={150}
            height={150}
            src="https://media.4-paws.org/9/c/9/7/9c97c38666efa11b79d94619cc1db56e8c43d430/Molly_006-2829x1886-2726x1886-1920x1328.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="info flex justify-center items-center my-24 flex-col gap-2">
        <div className="font-bold text-lg text-white">
          @{username}Bibechana Poudel
        </div>

        <div className="text-lg text-slate-400">
          Creating Animated art for VTT&apos;s
        </div>

        <div className="text-lg text-slate-400">
          26,626 .members113 .Posts$16 .680/release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">
              Supporters
            </h2>

            <ul className="mx-5 text-lg-3xl">
              <li className="my-4 flex gap-2 items-center">
                <img
                  width={33}
                  height={33}
                  className="rounded-full"
                  src="/avatar.gif"
                  alt="avatar"
                />

                <span>
                  Shubam donated{" "}
                  <span className="font-bold">
                    $10
                  </span>{" "}
                  with a message &quot;I support you
                  girl. lot&apos;s of ❤️&quot;
                </span>
              </li>

              <li className="my-4 flex gap-2 items-center">
                <img
                  width={33}
                  height={33}
                  className="rounded-full"
                  src="/avatar.gif"
                  alt="avatar"
                />

                <span>
                  Shubam donated{" "}
                  <span className="font-bold">
                    $10
                  </span>{" "}
                  with a message &quot;I support you
                  girl. lot&apos;s of ❤️&quot;
                </span>
              </li>

              <li className="my-4 flex gap-2 items-center">
                <img
                  width={33}
                  height={33}
                  className="rounded-full"
                  src="/avatar.gif"
                  alt="avatar"
                />

                <span>
                  Shubam donated{" "}
                  <span className="font-bold">
                    $10
                  </span>{" "}
                  with a message &quot;I support you
                  girl. lot&apos;s of ❤️&quot;
                </span>
              </li>

              <li className="my-4 flex gap-2 items-center">
                <img
                  width={33}
                  height={33}
                  className="rounded-full"
                  src="/avatar.gif"
                  alt="avatar"
                />

                <span>
                  Shubam donated{" "}
                  <span className="font-bold">
                    $10
                  </span>{" "}
                  with a message &quot;I support you
                  girl. lot&apos;s of ❤️&quot;
                </span>
              </li>
            </ul>
          </div>

          <div className="Make payments w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">
              Make Payments
            </h2>

            <div className="flex gap-2 flex-col">
              <input
                name="name"
                onChange={handleChange}
                value={paymentform.name}
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter your Name"
              />

              <input
                name="message"
                onChange={handleChange}
                value={paymentform.message}
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter your Message"
              />

              <input
                name="amount"
                onChange={handleChange}
                value={paymentform.amount}
                type="number"
                min="1"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter your Amount"
              />

              <button
                type="button"
                disabled={loading}
                onClick={() =>
                  pay(paymentform.amount)
                }
                className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading
                  ? "Redirecting..."
                  : "Pay"}
              </button>
            </div>

            {/* Quick payment amounts */}
            <div className="flex gap-2 mt-5 flex-wrap">
              <button
                type="button"
                disabled={loading}
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(1000)}
              >
                Pay Rs. 10
              </button>

              <button
                type="button"
                disabled={loading}
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(2000)}
              >
                Pay Rs. 20
              </button>

              <button
                type="button"
                disabled={loading}
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(5000)}
              >
                Pay Rs. 50
              </button>

              <button
                type="button"
                disabled={loading}
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(10000)}
              >
                Pay Rs. 100
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paymentpage;

