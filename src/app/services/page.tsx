import React from 'react'

//META DATA
export const metadata = {
  title: "Services",
  description: "Discover the range of services offered by PlayZone, including court booking, event organization, and personalized support to enhance your sports experience."
};

export default function services() {
  return (
    <section className='p-8 bg-[#1F2A3B] text-white rounded w-3/4 m-auto overflow-hidden shadow-lg'>
  <h1 className='text-2xl font-bold mb-4 text-[#237cbd]'>Our Services</h1>
  <p className='mb-6 text-lg'>
    Explore our sports services and choose the experience that fits your needs.
  </p>
    <a href="/services/booking" className='block mb-4 p-4 bg-[#237cbd] rounded text-center text-white font-semibold hover:bg-[#1a5e8a] transition-colors duration-300'>
      Court Booking</a>
      <a href="/services/training" className='block mb-4 p-4 bg-[#237cbd] rounded text-center text-white font-semibold hover:bg-[#1a5e8a] transition-colors duration-300'>
      Training Sessions</a>
</section>
  )
}
