'use client'

import { BtnSingOut } from '@/app/settings/components/buttons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const settingLinks = [
  {
    name: 'theme',
    href: '/settings/theme'
  },
  {
    name: 'workspace',
    href: '/settings/workspace'
  }
]

export function NavBarSettings() {
  const pathname = usePathname()

  return (
    <aside className='flex flex-col gap-4 justify-between bg-[var(--primary)] p-4 rounded-lg'>
      <nav className='flex flex-col xx2gap-2'>
        {settingLinks.map((link) => {
          const active = link.href === pathname
          return (
            <Link
              className={`flex items-center p-2 px-3 rounded-lg hover:bg-[#e3d644aax|] transition-colors capitalize font-medium ${
                active && 'bg-[#e3d64a] font-semibold'
              }`}
              href={link.href}
              key={link.name}>
              {link.name}
            </Link>
          )
        })}
      </nav>

      <BtnSingOut />
    </aside>
  )
}
