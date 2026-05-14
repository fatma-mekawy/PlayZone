'use client'
import Link from 'next/dist/client/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavLinks {
    href : string,
    label : string
}
export default function NavigationLinks({links}:NavLinks) {
     const pathname = usePathname()
      console.log(pathname)
  return (
    <ul className='flex justify-around text-[#237cbd] border-b font-bold bg-[#182430] mb-5 mt-2 p-2'>
        {links.map((link:NavLinks)=>(
          <li key={link.href}>
            <Link href={link.href} className={pathname === link.href ? "text-white border-b border-[#237cbd] p-0.5" : ""}>
            {link.label}</Link>
          </li>
        ))}
    </ul>
  )
}
