'use client'
import { useFormStatus } from 'react-dom'
import React from 'react'

function SubmitButton() {
    const { pending } = useFormStatus()

  return (
    <button type='submit' className='border p-2 ml-2' disabled = {pending}>
        {pending ? '提交中...' : '提交'}
    </button>
  )
}

export default SubmitButton