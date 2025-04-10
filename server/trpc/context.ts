import type { H3Event } from 'h3'
import { auth } from '~~/server/utils/auth'

export async function createTRPCContext(event: H3Event) {
  /**
   * Create your context based on the event object
   * Will be available as `ctx` in all your resolvers
   * @see: https://trpc.io/docs/server/context
   */

  const session = await auth.api.getSession({
    headers: event.headers
  })

  return {
    user: session?.user || null,
    event
  }
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>
