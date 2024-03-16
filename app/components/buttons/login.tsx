'use client'

import { signIn } from 'next-auth/react'

interface BtnLoginProps {
  children: React.ReactNode
}

export function BtnLogin({ children }: BtnLoginProps) {
  return (
    <button
      onClick={async () => {
        await signIn('google', {
          redirect: true,
          callbackUrl: '/'
        })
      }}
      className='bg-white hover:bg-gray-100 rounded-lg text-gray-800 font-semibold py-2 px-4 shadow flex gap-4 capitalize'>
      {children}
    </button>
  )
}
