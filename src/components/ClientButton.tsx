'use client'

import React from 'react'
import { addTodo } from '@/actions'

export default function ClientButton({ children }: { children: React.ReactNode}) {
  return (
    <button className='border p-2 ml-2' onClick={async () => {
        const formData = new FormData()
        formData.append('todo','🤠')
        await addTodo({message: '添加牛牛成功'},formData)
    }}>{children}</button>
  )
}
