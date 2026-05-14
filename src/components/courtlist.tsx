import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface Court {
  id: number;
  name: string;
  location: string;
  image: string;
  pricePerHour: number;
  sport: string;
  rating: number;
}
interface Props {
  fillteredValue: string;
  searchValue: string;
}

export default async function Courtlist({ fillteredValue , searchValue}: Props) {
const scourts = await fetch("https://6a0134b236fb6ad04de0b483.mockapi.io/courts")
const res = await scourts.json()

let filteredCourts: Court[] = [];

if (fillteredValue === "all") {
    filteredCourts = res;
}
if (fillteredValue === "football") {
    filteredCourts = res.filter((c: Court) => c.sport.toLowerCase() === "football");
}
if (fillteredValue === "padel") {
    filteredCourts = res.filter((c: Court) => c.sport.toLowerCase() === "padel");   
}
if (fillteredValue === "basketball") {
    filteredCourts = res.filter((c: Court) => c.sport.toLowerCase() === "basketball");   
}
if (searchValue) {
    filteredCourts = filteredCourts.filter((c: Court) =>
        c.sport.toLowerCase().includes(searchValue.toLowerCase())
    )
}

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCourts.map((c: Court) => (
          <div
            key={c.id}
            className="group bg-[#243447] rounded-3xl overflow-hidden shadow-lg"
          >
            
            <div className="overflow-hidden">
              {/* use Image instead of img tag */}
              <Image
                src={c.image}
                alt={c.name}
                width={200}
                height={200}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
    
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-[#4db8ff]">
                  {c.name}
                </h2>
    
                <span className="bg-[#237cbd] text-white text-sm px-4 py-2 rounded-full">
                  {c.sport}
                </span>
              </div>
    
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-white">Location:</span>
                  {c.location}
                </p>
    
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-white">Price/hour:</span>
                  {c.pricePerHour}
                </p>
    
                <p className="flex items-center gap-2">
                  <span className="font-semibold text-white">Rating:</span>
                  {c.rating}
                </p>
              </div>
    
              <Link href={`/courts/${c.id}`} className="mt-6 inline-block bg-[#4db8ff] text-white px-6 py-3 rounded-full hover:bg-[#237cbd] transition-colors duration-300">
  Book Now
</Link>
            </div>
          </div>
        ))}
      </div>
  )
}
