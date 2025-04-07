import { z } from 'zod'
import { baseProcedure, createTRPCRouter } from '../init'
import { db } from '~~/server/utils/db'
import { user } from '~~/server/database/schema'

export const userRouter = createTRPCRouter({
  // 获取所有用户
  getAll: baseProcedure
    .query(async () => {
      return await db.select().from(user)
    }),

  // 创建用户
  create: baseProcedure
    .input(z.object({
      name: z.string(),
      email: z.string().email()
    }))
    .mutation(async ({ input }) => {
      try {
        console.log('开始创建用户，输入数据:', input)

        const result = await db.insert(user).values({
          name: input.name,
          email: input.email,
          id: crypto.randomUUID(),
          emailVerified: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }).returning()

        console.log('用户创建成功:', result)
        return result[0]
      }
      catch (error) {
        console.error('创建用户错误:', error)
      }
    })
})
