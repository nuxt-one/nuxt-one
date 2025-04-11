import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import type { AppRouter } from '~~/server/trpc/routers'

export default defineNuxtPlugin(() => {
  const trpc = createTRPCNuxtClient<AppRouter>({
    links: [
      httpBatchLink({
        url: '/api/trpc',
        headers() {
          return {
            'Content-Type': 'application/json'
          }
        }
      })
    ]
  })

  return {
    provide: {
      trpc
    }
  }
})
