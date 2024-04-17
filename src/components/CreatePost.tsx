"use client"

import { publishPost } from '@/actions/publishPost'
import { ChangeEvent, useState } from 'react'

export const CreatePost = ({name, userId} : {name : any, userId : any}) => {
  const [input, setInput] = useState<string>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async () => {
    if(name !== null || userId !== null) {
      await publishPost(input, name, userId)
    }
  }

  return(
    <div>
      Make a post
      <input onChange={handleChange}></input>
      <button onClick={handleSubmit}>Post</button>
    </div>
  )  
}

export default CreatePost