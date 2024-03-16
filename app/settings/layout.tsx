import { BackIcon } from '@/components/icons/back'
import Link from 'next/link'
import { NavBarSettings } from './components/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wype - Settings'
}

export default function SettingsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='py-14 flex flex-col gap-6 flex-1'>
      <header className='flex gap-3 items-center'>
        <Link
          href={'/'}
          className='rounded-full p-2 hover:bg-gray-300/40 transition-colors'>
          <BackIcon />
        </Link>
        <h2 className='font-semibold text-2xl capitalize'>settings</h2>
      </header>
      <div className='flex gap-8 flex-1'>
        <NavBarSettings />
        {children}
      </div>
    </main>
  )
}
