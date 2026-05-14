import React from 'react'

export default function page() {
  return (
   <div className='grid grid-cols-1 md:grid-cols-2 gap-6  '>
    <div className='bg-[#2A3A4D] p-6 rounded-lg overflow-hidden shadow-lg'>
      <img
        className='w-full h-40 object-cover rounded'
        src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
        alt="Sports Booking"
      />
      <h2 className='text-xl font-bold mb-2'>Court Booking</h2>
      <p className='text-gray-300'>
        Easily book football, padel, basketball, and tennis courts with flexible
        schedules and affordable hourly prices.
      </p>
      
    </div>
    

  </div>
  )
}
