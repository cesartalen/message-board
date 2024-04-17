"use server"

import CreatePost from '@/components/CreatePost';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { currentUser } from '@clerk/nextjs';
import { randomUUID } from 'crypto';
import { ChangeEvent, useEffect, useState } from 'react';

const PostPage = async () => {
  const user = await currentUser()

  const allPosts = await db.query.posts.findMany()


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Hello, {user?.username} : {user?.id}
      </div>
      
      <CreatePost userId={user?.id} name={user?.username}/>
      <div>
        Posts
        {allPosts.map((post, index) => (
          <div key={index}>{post.message}, {user?.username}</div>
        ))}
      </div>
    </main>
  );
}

export default PostPage