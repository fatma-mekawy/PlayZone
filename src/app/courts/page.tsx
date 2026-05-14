import Image from 'next/image'
import React, { Suspense } from 'react'
import Courtlist from '../../components/courtlist'
import Spinner from '@/components/Spinner'
import Fillter from '@/components/Fillter'
import Search from '@/components/Search' 

//META DATA
export const metadata = {
  title: "Courts",
  description: "Browse our selection of available sport courts for booking and reservation."}
  
  export const revalidate = 15;


  interface Props {
    searchParams: Promise<{
      sport: string;
      search: string;
    }>;
  }
  export default  async function page({ searchParams }: Props) {
    const { sport, search } = await searchParams
    const fillteredValue = sport ?? "all";
  return (
  <div className="max-w-6xl mx-auto px-6 py-12 bg-[#1F2A3B]  rounded shadow-2xl mb-2">
  
  <div className="flex items-center justify-between mb-10 flex-col md:flex-row gap-4">
    <h1 className="text-4xl font-extrabold text-[#237cbd] tracking-widest ">
      Courts
    </h1>
    <p className="text-gray-300 max-w-md text-center md:text-left">
      Discover our selection of premium football, padel, basketball, and tennis courts for booking and reservation.    </p>
    <span className="bg-[#237cbd]/20 text-[#4db8ff] px-4 py-2 rounded-full text-sm font-semibold border border-[#237cbd]/40">
      Available Courts
    </span>
  </div>
  
  <Fillter />
  <Search />
  <Suspense fallback={<div ><Spinner /></div>}>
  <Courtlist fillteredValue={fillteredValue} searchValue={search ?? ""} />
  </Suspense>
</div>
  )
}
