import { z } from 'zod'
import { router, publicProcedure } from '../trpc'

const idSchema = z.object({ id: z.string()})

const userSchema = z.object({
  name: z.string(),
  email: z.string(), 
})

const userUpdateSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
})

export const appRouter = router({
  //get all users
  getAll: publicProcedure.query(() => {
    return prisma.user.findMany()
  })
})

// export type definition of API
export type AppRouter = typeof appRouter
