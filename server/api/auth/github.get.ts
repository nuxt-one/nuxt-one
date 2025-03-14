import type { H3Event } from 'h3'

export default defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true
  },
  async onSuccess(event: H3Event, { user }: { user: any }) {
    await setUserSession(event, { user })
    return sendRedirect(event, '/')
  },
  onError(event: H3Event, error: Error) {
    console.error('GitHub OAuth error:', error)
    return sendRedirect(event, '/')
  }
})
