import { auth } from '~~/server/utils/auth'

export default defineEventHandler((event) => {
  return auth.handler(toWebRequest(event))
})
