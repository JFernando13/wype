import type { TItem } from '@/components/tabs/types'
export interface TTab {
  id: string
  name: string
  content: {
    name: string
    items: TItem[]
  }[]
}

export interface CurrentTabProps {
  currentTab: TTab
}
