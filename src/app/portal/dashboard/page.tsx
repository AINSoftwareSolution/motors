"use client"
import useToken from '@/app/hooks/useToken'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Dashboard = () => {
  const router = useRouter()
  const token = useToken()

  console.log(token ,!token)

  useEffect(() => {
    
    if (!token) {
      router.push('/portal/login')
    }
  }, [])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard