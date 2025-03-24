// https://trpc.io/docs/server/merging-routers
import { createTRPCRouter } from '../init'
import { helloRouter } from './hello'
import { userRouter } from './users'

export const appRouter = createTRPCRouter({
  sayHello: helloRouter,
  users: userRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
