// "use client"
// import React from 'react'
// import {useRouter} from 'next/navigation'
// import { useSession,signIn, signOut } from "next-auth/react"
// import { useEffect } from "react";

// const Dashboard = () => {
//     const { data: session } = useSession();
//       const router = useRouter();
    
//       useEffect(() => {
//         if (!session) {
//           router.push("/login");
//         }
//       }, [session, router]);
    
//   return (
//     <div>
//       dashboard
//     </div>
//   )
// }

// export default Dashboard
"use client"
import React from 'react'
import { useState } from "react"

export default function DashboardPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    message: "",
    amount: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
    alert("Your information has been submitted!")
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            Welcome to Our Dashboard 👋
          </h1>

          <p className="mt-3 text-slate-400">
            Manage your profile, information, and support details from here.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">

          <div className="rounded-xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Total Supporters
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              1,240
            </h2>
          </div>

          <div className="rounded-xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Total Posts
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              113
            </h2>
          </div>

          <div className="rounded-xl bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Total Earnings
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              $16,680
            </h2>
          </div>

        </div>

        {/* Form */}
        <div className="rounded-2xl bg-slate-900 p-6 shadow-xl md:p-10">

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">
              Your Information
            </h2>

            <p className="mt-2 text-slate-400">
              Enter your details below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-purple-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-purple-500"
                  required
                />
              </div>

            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Username
              </label>

              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="@username"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us something about yourself..."
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-purple-500"
              />
            </div>

            {/* Amount */}
            <div>
              <label
                htmlFor="amount"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Support Amount
              </label>

              <input
                id="amount"
                name="amount"
                type="number"
                min="1"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-purple-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">

              <button
                type="submit"
                className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
              >
                Save Information
              </button>

              <button
                type="reset"
                onClick={() =>
                  setFormData({
                    name: "",
                    email: "",
                    username: "",
                    message: "",
                    amount: "",
                  })
                }
                className="rounded-lg bg-slate-800 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
              >
                Reset
              </button>

            </div>

          </form>
        </div>

      </div>
    </main>
  )
}


