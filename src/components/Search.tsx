"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default function Search() {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    function handleSearch(value: string) {

        const params = new URLSearchParams(searchParams)

        if (value) {
            params.set("search", value)
        } else {
            params.delete("search")
        }

        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className='mb-6'>
            <input
                type="text"
                placeholder='Search by sport name...'
                onChange={(e) => handleSearch(e.target.value)}
                className='w-full md:w-96 bg-[#243447] text-white border border-[#237cbd] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#237cbd]'
            />
        </div>
    )
}