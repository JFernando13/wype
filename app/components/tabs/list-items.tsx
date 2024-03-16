'use client'
import { RightArrowIcon, DownArrowIcon } from '@/components/icons'
import { CardItem } from './card-item'

import { useState } from 'react'
import type { TItem } from './types'

export interface ListItemsProps {
  content: {
    name: string
    items: TItem[]
  }
}

export function ListItems({ content }: ListItemsProps) {
  const [isOpen, setIsOpen] = useState(content.items.length > 0)

  return (
    <section
      key={content.name}
      className='flex flex-col gap-4'>
      <h2
        className='font-semibold text-xl px-4 py-2 hover:bg-[var(--primary-hover)] w-fit rounded-lg transition-colors cursor-pointer flex gap-2 items-center h-fit'
        onClick={() => content.items.length > 0 && setIsOpen(!isOpen)}>
        <span>
          {isOpen && content.items.length > 0 ? (
            <DownArrowIcon />
          ) : (
            <RightArrowIcon />
          )}
        </span>
        <span className='first-letter:capitalize'>{content.name}</span>
        <span className='text-sm font-medium text-[var(--text-details)]'>
          {content.items.length}
        </span>
      </h2>
      <section
        className={`grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8 ${
          isOpen ? 'scale-1' : 'scale-0 h-0'
        } transition-all origin-top-left`}>
        {content.items.map((item) => (
          <CardItem
            key={item.id}
            item={item}
          />
        ))}
      </section>
    </section>
  )
}
