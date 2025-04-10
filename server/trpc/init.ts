import { initTRPC, TRPCError } from '@trpc/server'
import type { Context } from './context'

const t = initTRPC.context<Context>().create()

// create a middleware to check if user is authenticated
const isAuthed = t.middleware(async ({ next, ctx }) => {
  const t = await useTranslation(ctx.event)

  // check if user is authenticated
  if (!ctx.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: t('unauthorized')
    })
  }

  // if user is authenticated, continue processing the request
  return next({
    ctx: {
      user: ctx.user
    }
  })
})

// Base router and procedure helpers
export const createTRPCRouter = t.router
export const createCallerFactory = t.createCallerFactory
export const baseProcedure = t.procedure

// create a protected procedure that requires user authentication
export const protectedProcedure = t.procedure.use(isAuthed)
