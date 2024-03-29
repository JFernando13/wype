import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
        <main className='max-w-screen-md mx-auto flex flex-col gap-8 min-h-screen pb-10 pt-6 max-md:px-4'>
          {children}
        </main>
      </body>
    </html>
  )
}
