"use client"
import React from 'react'
import {useRouter} from 'next/navigation'
import { useSession,signIn, signOut } from "next-auth/react"
import { useEffect } from "react";

const Dashboard = () => {
    const { data: session } = useSession();
      const router = useRouter();
    
      useEffect(() => {
        if (!session) {
          router.push("/login");
        }
      }, [session, router]);
    
  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard
