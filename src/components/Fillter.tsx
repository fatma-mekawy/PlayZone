"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default function Fillter() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    function handleFillter(fillter: string) {
       const params = new URLSearchParams(searchParams)
       params.set("sport", fillter)
       router.replace(`${pathname}?${params.toString()}`)
    }
  return (
    <div>
        <button onClick={() => handleFillter("all")} className='bg-[#237cbd] text-white px-4 py-2 rounded-lg mr-4 mb-4'>All</button>
        <button onClick={() => handleFillter("football")} className='bg-[#237cbd] text-white px-4 py-2 rounded-lg mr-4 mb-4'>Football</button>
        <button onClick={() => handleFillter("basketball")} className='bg-[#237cbd] text-white px-4 py-2 rounded-lg mr-4 mb-4'>Basketball</button>
        <button onClick={() => handleFillter("padel")} className='bg-[#237cbd] text-white px-4 py-2 rounded-lg mr-4 mb-4'>Padel</button>        
    </div>
  )
}
