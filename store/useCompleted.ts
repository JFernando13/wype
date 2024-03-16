import { create } from 'zustand'
import { TTab, type TItem } from '@/app/components/tabs/types'
import { tabs } from '@/app/components/tabs/mocks'

type State = {
  tabs: TTab[]
}

type Actions = {
  // eslint-disable-next-line no-unused-vars
  addToCompleted: (item: TItem) => void
}

export const useCompleted = create<State & Actions>((set) => ({
  tabs,
  addToCompleted: (item) => {
    // Encontrar la pestaña correspondiente

    const currentTab =
      tabs.find((tab) =>
        tab.content.some((content) =>
          content.items.some((i) => i.id === item.id)
        )
      ) ?? ({} as TTab)

    const currentSection = currentTab?.content.find((content) =>
      content.items.some((i) => item.id === i.id)
    )

    const destinySection = currentTab?.content.find((content) =>
      content.items.every((i) => item.id !== i.id)
    )

    if (currentSection) {
      currentSection.items = currentSection.items.filter(
        (i) => i.id !== item.id
      )
    }

    if (destinySection) {
      const newItem = { ...item, completed: !item.completed }
      destinySection.items = [...destinySection.items, newItem]
    }

    set((state) => ({
      tabs: state.tabs
    }))
  }
}))
