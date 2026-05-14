import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div>
        <Image src = "/logo-no-background.png" alt='LOGO' width={400} height={400}/>
    </div>
  )
}
