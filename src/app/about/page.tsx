import React from 'react'
//META DATA
export const metadata = {
  title: "About",
  description: "Learn more about PlayZone, our mission, and how we strive to provide the best experience for booking sport courts and enjoying games with friends.",
};
export default function About() {
  return (
    <div>

  <section className="w-3/4 mx-auto p-6 bg-[#1F2A3B] rounded-lg shadow-md overflow-hidden shadow-lg">
  <h1 className="text-3xl font-bold mb-4 text-[#237cbd]">About PlayZone</h1>

  <p className="mb-4">
    Welcome to <strong className='text-[#237cbd]'>PlayZone</strong>, your ultimate destination for booking
    premium sports courts online. Our platform is designed to make finding and
    reserving football, padel, basketball, and tennis courts fast, simple, and
    convenient.
  </p>

  <p className="mb-4">
    Whether you are planning a friendly match with your friends or organizing a
    professional training session, PlayZone helps you discover the best courts
    near you with flexible booking times and affordable prices.
  </p>

  <p className="mb-4">
    We aim to improve the sports experience by connecting players with modern,
    high-quality sports facilities through a smooth and user-friendly platform.
  </p>

  <h2 className="text-2xl font-bold mb-4 text-[#237cbd]">Why Choose Us?</h2>

  <ul className="list-disc list-inside mb-4">
    <li>Easy and fast booking system</li>
    <li>Modern and responsive design</li>
    <li>Multiple sports categories</li>
    <li>Affordable hourly prices</li>
    <li>Secure and reliable platform</li>
  </ul>

  <p className="mb-4">
    At PlayZone, we believe sports bring people together, build teamwork, and
    create unforgettable moments. Start your journey today and book your next
    match with ease.
  </p>
</section>
    </div>
  )
}
