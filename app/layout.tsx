import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { NavBar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wype',
  description: 'Your favorite shopping list manager'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='max-w-screen-md mx-auto flex flex-col gap-8 h-screen pb-10'>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}