"use server"

import { posts } from '@/db/schema'
import { db } from '@/db'

export const publishPost = async (input : any, name: any, userId: any) => {
  await db.insert(posts).values({
    userId: userId,
    userName: name,
    message: input,
    createdAt: new Date()
  })
}