import { z } from 'zod'
import { desc, eq } from 'drizzle-orm'
import { createTRPCRouter, protectedProcedure } from '../init'
import { db } from '~~/server/utils/db'
import { post } from '~~/server/database/schema'

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({
      name: z.string().min(1, 'don\'t be empty')
    }))
    .mutation(async ({ ctx, input }) => {
      const t = await useTranslation(ctx.event)
      const userId = ctx.user.id
      const postId = crypto.randomUUID()

      const now = new Date()

      await db.insert(post).values({
        id: postId,
        name: input.name,
        userId,
        createdAt: now,
        updatedAt: now
      })

      return {
        success: true,
        message: t('serverResponse'),
        post: {
          id: postId,
          name: input.name
        }
      }
    }),

  getMyLatest: protectedProcedure
    .query(async ({ ctx }) => {
      const posts = await db
        .select()
        .from(post)
        .where(eq(post.userId, ctx.user.id))
        .orderBy(desc(post.createdAt))
        .limit(1)

      return posts[0] || null
    })
})
