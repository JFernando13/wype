'use client'

import type { CurrentTabProps, TTab } from '@/components/tabs/types'
import { ListItems } from './list-items'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useCompleted } from '@/store/useCompleted'

export function CurrentTab() {
  const searchParams = useSearchParams()
  const { tabs } = useCompleted()

  const tab = searchParams.get('category') ?? 'all'
  const [currentTab, setCurrentTab] = useState<TTab>(tabs[0])

  useEffect(() => {
    setCurrentTab(tabs.find(({ name }) => name === tab) ?? tabs[1])
  }, [tabs, tab])

  return (
    <section className='flex flex-col gap-6'>
      {currentTab.content.map((content) => {
        return (
          <ListItems
            key={content.name}
            content={content}
          />
        )
      })}
    </section>
  )
}
