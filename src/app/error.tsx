"use client"
import React from 'react'

interface Props{
    error : Error
}
export default function error({ error }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-6">
  <div className="text-5xl mb-4">⚠️</div>
  <h1 className='text-3xl font-extrabold text-red-400 mb-3'>Something went wrong</h1>
  <p className='text-[#EEEEEE]/60'>{error.message}</p>
  <a href="/" className="mt-6 bg-[#2F578A] text-[#EEEEEE] font-bold px-6 py-2.5 rounded-full hover:bg-[#C4E2F5] hover:text-[#121358] transition-all duration-300 text-sm">
    Go Home
  </a>
</div>
  )
}
