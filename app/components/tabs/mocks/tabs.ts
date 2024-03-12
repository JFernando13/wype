import type { TTab } from '@/components/tabs/types'
export const tabs: TTab[] = [
  {
    id: crypto.randomUUID(),
    name: 'all',
    content: [
      {
        name: 'uncompleted',
        items: [
          {
            id: crypto.randomUUID(),
            name: 'manzana',
            completed: false,
            author: 'juan fernando',
            deadline: '2024-03-21',
            price: '10.000',
            quantity: 1500,
            unity: 'gr'
          },
          {
            id: crypto.randomUUID(),
            name: 'pie de limon',
            completed: false,
            author: 'juan fernando',
            deadline: '2024-03-21',
            price: '10.000',
            quantity: 3,
            unity: 'un'
          },
          {
            id: crypto.randomUUID(),
            name: 'aceite de oliva extravirgen',
            completed: false,
            author: 'juan fernando',
            deadline: '2024-03-21',
            price: '10.000',
            quantity: 2500,
            unity: 'un'
          },
          {
            id: crypto.randomUUID(),
            name: 'aceite',
            completed: false,
            author: 'juan fernando',
            deadline: '2024-03-21',
            price: '10.000',
            quantity: 2500,
            unity: 'un'
          }
        ]
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
        items: [
          {
            id: crypto.randomUUID(),
            name: 'manzana',
            completed: false,
            author: 'juan fernando',
            deadline: '2024-03-21',
            price: '10.000',
            quantity: 1500,
            unity: 'gr'
          },
          {
            id: crypto.randomUUID(),
            name: 'aceite',
            completed: false,
            author: 'juan fernando',
            deadline: '2024-03-21',
            price: '10.000',
            quantity: 2500,
            unity: 'un'
          }
        ]
      },
      {
        name: 'completed',
        items: []
      }
    ]
  }
]
