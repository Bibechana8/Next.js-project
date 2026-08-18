"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signOut } from "next-auth/react"

const Dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [form, setform] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
    razorpayid: "",
    razorpaysecret: ""
  })
  const [successMessage, setSuccessMessage] = useState("")

  useEffect(() => {
    if (!session) {
      router.push("/login")
    } else {
      setLoading(false)
      // Initialize form with session data
      setform(prev => ({
        ...prev,
        name: session?.user?.name || "",
        email: session?.user?.email || ""
      }))
    }
  }, [router, session])

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // TODO: Connect to your backend API
      // const response = await fetch('/api/updateProfile', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username: session.user.name, data: form })
      // })
      
      setSuccessMessage('Profile Updated Successfully!')
      setTimeout(() => setSuccessMessage(""), 3000)
      console.log("Profile updated:", form)
    } catch (error) {
      console.error("Error updating profile:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px] text-white">
      <div className='container mx-auto py-5 px-6'>
        <div className="flex items-center justify-between mb-8">
          <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>
          <button 
            onClick={() => signOut()}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Sign Out
          </button>
        </div>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-600 rounded-lg text-white">
            {successMessage}
          </div>
        )}

        <form className="max-w-2xl mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg p-8" onSubmit={handleSubmit}>
          <div className='my-4'>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-200">Name</label>
            <input 
              value={form.name || ""} 
              onChange={handleChange} 
              type="text" 
              name='name' 
              id="name" 
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Enter your name"
            />
          </div>

          <div className="my-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200">Email</label>
            <input 
              value={form.email || ""} 
              onChange={handleChange} 
              type="email" 
              name='email' 
              id="email" 
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Enter your email"
            />
          </div>

          <div className='my-4'>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-200">Username</label>
            <input 
              value={form.username || ""} 
              onChange={handleChange} 
              type="text" 
              name='username' 
              id="username" 
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Enter your username"
            />
          </div>

          <div className="my-4">
            <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-gray-200">Profile Picture URL</label>
            <input 
              value={form.profilepic || ""} 
              onChange={handleChange} 
              type="text" 
              name='profilepic' 
              id="profilepic" 
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Enter profile picture URL"
            />
          </div>

          <div className="my-4">
            <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-gray-200">Cover Picture URL</label>
            <input 
              value={form.coverpic || ""} 
              onChange={handleChange} 
              type="text" 
              name='coverpic' 
              id="coverpic" 
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Enter cover picture URL"
            />
          </div>

          <div className="my-4">
            <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-gray-200">Razorpay ID</label>
            <input 
              value={form.razorpayid || ""} 
              onChange={handleChange} 
              type="text" 
              name='razorpayid' 
              id="razorpayid" 
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Enter Razorpay ID"
            />
          </div>

          <div className="my-4">
            <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-gray-200">Razorpay Secret</label>
            <input 
              value={form.razorpaysecret || ""} 
              onChange={handleChange} 
              type="password" 
              name='razorpaysecret' 
              id="razorpaysecret" 
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Enter Razorpay Secret"
            />
          </div>

          <div className="my-6">
            <button 
              type="submit" 
              className="block w-full p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-blue-500 focus:ring-4 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm transition-colors"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Dashboard
