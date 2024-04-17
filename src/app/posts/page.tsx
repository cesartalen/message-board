"use client"

import { db } from '@/db/drizzle';
import { currentUser } from '@clerk/nextjs';
import { ChangeEvent, useState } from 'react';

const PostPage = async () => {
  const [input, setInput] = useState<string>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  // Needs use server environment.
  const user = await currentUser()

  const posts = await db.query.posts.findMany()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Hello, {user?.username}
      </div>
      <div>
        Make a post
        <input onChange={handleChange}></input>
        <button/>
      </div>
      <div>
        Posts
        {posts.map((post, index) => (
          <div key={index}>{post.message}</div>
        ))}
      </div>
    </main>
  );
}

export default PostPage