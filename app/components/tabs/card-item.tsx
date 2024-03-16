import type { CardItemProps } from '@/components/tabs/types'
import { NotesIcon, FlagIcon } from '@/components/icons'
import { useCompleted } from '@/store/useCompleted'

export function CardItem({ item }: CardItemProps) {
  const addToCompleted = useCompleted((state) => state.addToCompleted)

  return (
    <article
      key={item.id}
      className='rounded-lg bg-[var(--bg-card)] py-3 px-4 flex flex-col gap-4 justify-between'>
      <header className='flex flex-col gap-2'>
        <p className='text-sm capitalize text-[var(--text-details)]'>
          added by {item.author}
        </p>
        <div className='flex justify-between'>
          <menu className='flex gap-2'>
            <button className='p-2 bg-[var(--bg-btn-card)] hover:bg-[var(--bg-btn-card-hover)] rounded-lg flex justify-center items-center'>
              <FlagIcon />
            </button>
            <button className='p-2 bg-[var(--bg-btn-card)] hover:bg-[var(--bg-btn-card-hover)] rounded-lg flex justify-center items-center'>
              <NotesIcon />
            </button>
            {/* <button className='p-2 bg-[var(--bg-btn-card)] hover:bg-[var(--bg-btn-card-hover)] rounded-lg flex justify-center items-center'></button> */}
          </menu>

          <input
            type='checkbox'
            className='appearance-none h-full w-[35.2px] border-slate-900 border-2 rounded-lg checked:bg-yellow-500 checked:after:content-["\2713"] flex justify-center items-center transition-all'
            checked={item.completed}
            onChange={() => addToCompleted(item)}
          />
        </div>
      </header>

      <main className='flex justify-between'>
        <hgroup className='flex flex-col'>
          <p className='text-md font-light'>${item.price}</p>
          <h2 className='text-xl font-bold capitalize'>{item.name}</h2>
        </hgroup>

        <div className='flex gap-1 items-end'>
          <p className='text-2xl font-semibold'>{item.quantity}</p>
          <p>{item.unity}</p>
        </div>
      </main>
    </article>
  )
}
