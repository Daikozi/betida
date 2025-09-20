import { UseQueryResult, useQuery } from '@tanstack/react-query'

import { getExemple } from '../services/getExemple'

export const useUserGetExemple = (): UseQueryResult =>
  useQuery({
    queryKey: ['getExemple'],
    queryFn: getExemple,
  })
