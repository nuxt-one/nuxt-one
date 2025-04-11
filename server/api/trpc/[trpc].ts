import { createTRPCNuxtHandler } from 'trpc-nuxt/server'
import { createTRPCContext } from '~~/server/trpc/context'
import { appRouter } from '~~/server/trpc/routers'

export default createTRPCNuxtHandler({
  endpoint: '/api/trpc',
  router: appRouter,
  createContext: createTRPCContext
})
