'use client'

import { signOut } from 'next-auth/react'

export function BtnSingOut() {
  return (
    <button
      onClick={async () => {
        await signOut({
          callbackUrl: '/',
          redirect: true
        })
      }}
      className='bg-white hover:bg-gray-100 rounded-lg text-red-700 font-semibold py-2 px-4 shadow flex gap-4 capitalize'>
      sign out
    </button>
  )
}
