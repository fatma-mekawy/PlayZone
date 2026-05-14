import React from 'react'

export default function page() {
  return (
    <div className='bg-[#2A3A4D] p-6 rounded-lg overflow-hidden shadow-lg'>
      <img
        className='w-full h-40 object-cover rounded'
        src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
        alt="Sports Training"
      />
      <h2 className='text-xl font-bold mb-2'>Training</h2>
      <p className='text-gray-300'>
        Join professional training sessions with experienced coaches to improve
        your skills and fitness performance.
      </p>
      
    </div>
  )
}
