'use client'

import { FC, ReactNode } from 'react'

import { QueryClient, QueryClientProvider, isServer } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const makeQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        throwOnError: true,
      },
    },
  })

let browserQueryClient: QueryClient | undefined

const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient()
  }
  browserQueryClient ??= makeQueryClient()

  return browserQueryClient
}
const queryClient = getQueryClient()

type ReactQueryProviderProps = {
  children: ReactNode
}

const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    {children}
  </QueryClientProvider>
)

export default ReactQueryProvider
