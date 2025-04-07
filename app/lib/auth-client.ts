import { createAuthClient } from 'better-auth/vue'

export const authClient = createAuthClient({
  /** the base url of the server (optional if you're using the same domain) */
  baseURL: process.env.BETTER_AUTH_URL
})

export const { signIn, signUp, useSession } = createAuthClient()
