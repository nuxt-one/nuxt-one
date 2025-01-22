import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

// https://trpc.io/docs/server/merging-routers
import { helloRouter } from './hello'

export const appRouter = router({
  sayHello: helloRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
