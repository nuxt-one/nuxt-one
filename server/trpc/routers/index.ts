// https://trpc.io/docs/server/merging-routers
import { createTRPCRouter } from '../init'
import { helloRouter } from './hello'
import { postRouter } from './post'

export const appRouter = createTRPCRouter({
  sayHello: helloRouter,
  post: postRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
