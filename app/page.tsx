import Image from 'next/image'
import { MenuTabs, CurrentTab } from './components/tabs'

import { tabs } from './components/tabs/mocks'

const currentTab = tabs[0]

export default function Home() {
  return (
    <main className='flex flex-col justify-between h-full'>
      <CurrentTab />
      <MenuTabs />
    </main>
  )
}
