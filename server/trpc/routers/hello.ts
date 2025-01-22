import { publicProcedure, router } from '../trpc'
import { z } from 'zod'

export const helloRouter = router({
  hello: publicProcedure
  .input(
    z.object({
      text: z.string().nullish(),
    }),
  )
  .query(({ input }) => {
    return {
      greeting: `hello ${input?.text ?? 'world'}`,
    }
  }),
})
