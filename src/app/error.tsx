"use client"
import React from 'react'

interface Props{
    error : Error
}
export default function error({ error }: Props) {
  return (
    <div>
        <h1 className='text-4xl font-extrabold text-[#bd2330] tracking-widest '>An error occurred</h1>
        <p className='text-gray-300 mt-2'>Error details: {error.message}</p>
    </div>
  )
}
