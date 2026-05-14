import { promises } from 'dns'
import React from 'react'
import Image from 'next/image'
    function getCourtData() {
    return fetch("https://6a0134b236fb6ad04de0b483.mockapi.io/courts")
        .then(res => res.json())
    }
interface Props{
    params : Promise<{ courtid : string}>
}
//dynamic route 

export default  async function CourtId({ params }: Props) {
    const { courtid } = await params
    const court = await getCourtData().then((data) => data.find((c: { id: string }) => c.id === courtid))
  return (
    <div className="w-3/4 mx-auto px-6 py-12 bg-[#1F2A3B]  rounded shadow-2xl mb-2">
        <h1 className="text-4xl font-extrabold text-[#237cbd] tracking-widest ">{court?.name}</h1>
        <p className="text-lg text-gray-300">sport : {court?.sport}</p>
        <p className="text-lg text-gray-300">Location : {court?.location}</p>
        <Image className="mx-auto my-4" src={court?.image} alt={court?.name} width={400} height={400}/>
        <p className="text-2xl font-bold text-white">Price per hour: {court?.pricePerHour.toFixed(2)}</p>
     </div>
  )
}
