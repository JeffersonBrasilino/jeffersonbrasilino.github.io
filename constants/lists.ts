import type { QueryItem } from '~/types'

export const QUERY_LIST = {
  movie: <QueryItem[]>[
    { type: 'doramas', title: 'Doramas', query: 'doramas' },
    { type: 'miniDramas', title: 'Mini Dramas', query: 'miniDramas' },
  ],
}
