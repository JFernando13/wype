'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCompleted } from '@/store/useCompleted'

export function MenuTabs() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const { tabs } = useCompleted()

  const handleTab = (name: string) => {
    const searchParams = new URLSearchParams(pathname)

    searchParams.set('category', name)

    const newUrl = `${pathname}?${searchParams.toString()}`

    router.push(newUrl)
  }

  return (
    <menu className='flex gap-4 rounded-lg bg-[var(--primary)] px-6 py-2 justify-center w-fit overflow-scroll max-w-full self-center'>
      {tabs.map((tab) => {
        const active =
          searchParams.get('category') === tab.name ||
          (searchParams.get('category') === null && tab.name === 'all')
        return (
          <button
            key={tab.id}
            onClick={() => handleTab(tab.name)}
            className={` text-white px-4 py-1 rounded-full hover:bg-[var(--tab-hover)] ${
              active ? 'bg-[var(--tab-active)]' : 'bg-[var(--tab-inactive)]'
            } capitalize`}>
            {tab.name}
          </button>
        )
      })}
    </menu>
  )
}
