import { z } from 'zod'
import { baseProcedure, createTRPCRouter } from '../init'

export const helloRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string().nullish()
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? 'Nuxt one'}`
      }
    })
})
