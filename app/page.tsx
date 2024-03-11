import Image from 'next/image'
import { RightArrowIcon, DownArrowIcon } from './components/icons'

interface TItem {
  name: string
  id: string
  completed: boolean
  notes?: string
  importance?: number
  author: string
  deadline: string
}

interface TTabs {
  id: string
  name: string
  content: {
    name: string
    items: TItem[]
  }[]
}

const tabs = [
  {
    id: crypto.randomUUID(),
    name: 'all',
    content: [
      {
        name: 'uncompleted',
        items: []
      },
      {
        name: 'completed',
        items: []
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: 'vegetables',
    content: [
      {
        name: 'uncompleted',
        items: []
      },
      {
        name: 'completed',
        items: []
      }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: 'ƒruits',
    content: [
      {
        name: 'uncompleted',
        items: []
      },
      {
        name: 'completed',
        items: []
      }
    ]
  }
]

const currentTab = tabs[0]

export default function Home() {
  const isOpen = false

  return (
    <main className='flex flex-col justify-between h-full'>
      <section className='flex flex-col gap-6'>
        {currentTab.content.map((content) => (
          <section
            key={content.name}
            className='flex flex-col gap-2'>
            <h2 className='font-semibold text-xl px-4 py-2 hover:bg-[var(--primary-hover)] w-fit rounded-lg transition-colors cursor-pointer flex gap-2 items-center'>
              <span>{isOpen ? <DownArrowIcon /> : <RightArrowIcon />}</span>
              <span className='first-letter:capitalize'>{content.name}</span>
            </h2>
            {content.items.map((item) => (
              <article key={item}>{item}</article>
            ))}
          </section>
        ))}
      </section>
      <menu className='flex gap-4 rounded-lg bg-[var(--primary)] px-6 py-2 justify-center w-fit overflow-scroll max-w-full self-center'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className=''>
            {tab.name}
          </button>
        ))}
      </menu>
    </main>
  )
}
