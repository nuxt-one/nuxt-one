import { router } from '../trpc'

// https://trpc.io/docs/server/merging-routers
import { helloRouter } from './hello'
import { userRouter } from './users'

export const appRouter = router({
  sayHello: helloRouter,
  users: userRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
