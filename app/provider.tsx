"use client"
import { ContextProvider } from '@/context/contextProvider'
import { SessionProvider } from 'next-auth/react'

const Provider = ({children}:{children:React.ReactNode}) => {
  return (
    <SessionProvider>
    {children}
    </SessionProvider>
  )
}

export default Provider