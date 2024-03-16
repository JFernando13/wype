import { FormModal } from '@/components/modals/form'
import { MenuTabs, CurrentTab } from '@/components/tabs'
import { NavBar } from '@/app/components/navbar/navbar'

import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <NavBar />

      <main className='flex flex-col justify-between flex-1'>
        <Suspense>
          <CurrentTab />
          <MenuTabs />
        </Suspense>

        <FormModal />
      </main>
    </>
  )
}
