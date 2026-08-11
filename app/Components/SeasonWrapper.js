"use client"
import { SessionProvider } from "next-auth/react"

export default function SeasonWrapper( { children }) {
  return (
    <SessionProvider >
      {children}
    </SessionProvider>
  )
}
