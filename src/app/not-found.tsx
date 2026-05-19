import React from 'react'

export default function notfound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-6">
  <div className="text-6xl mb-6">🏟</div>
  <h1 className='text-5xl font-extrabold text-[#EEEEEE] mb-3'>404</h1>
  <p className="text-[#C4E2F5] text-xl mb-8">Oops! This court doesn't exist.</p>
  <a href="/" className="bg-[#2F578A] text-[#EEEEEE] font-bold px-8 py-3 rounded-full hover:bg-[#C4E2F5] hover:text-[#121358] transition-all duration-300">
    ← Back to Home
  </a>
</div>
  )
}
