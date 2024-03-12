export interface TItem {
  name: string
  id: string
  completed: boolean
  notes?: string
  importance?: number
  author: string
  deadline: string
  price: string
  unity:
    | 'gr'
    | 'kg'
    | 'ml'
    | 'l'
    | 'un'
    | 'g'
    | 'oz'
    | 'lb'
    | 'cm'
    | 'm'
    | 'ft'
    | 'yd'
    | 'in'
  quantity: number
}

export interface CardItemProps {
  item: TItem
}
