import React, { Suspense } from "react";
import Courtlist from "../../components/courtlist";
import Spinner from "@/components/Spinner";
import Filter from "@/components/Fillter";
import Search from "@/components/Search";
import { LayoutGrid } from "lucide-react";

export const metadata = {
  title: "Courts | PlayZone",
  description: "Browse our selection of available sport courts.",
};
export const revalidate = 15;

interface Props {
  searchParams: Promise<{ sport: string; search: string }>;
}

export default async function CourtsPage({ searchParams }: Props) {
  const { sport, search } = await searchParams;
  const filteredValue = sport ?? "all";

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <LayoutGrid size={16} className="text-[#94A3B8]" />
          <span className="text-xs font-semibold tracking-widest text-[#94A3B8] uppercase">
            PlayZone
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <h1 className="text-4xl font-extrabold text-[#1A2540]">
            Sport <span className="text-[#1E56A0]">Courts</span>
          </h1>
          <p className="text-[#94A3B8] max-w-sm text-sm leading-relaxed">
            Discover premium football, padel, basketball, and tennis courts for
            booking and reservation.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center">
        <Filter />
        <div className="md:ml-auto">
          <Search />
        </div>
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center mt-16">
            <Spinner />
          </div>
        }
      >
        <Courtlist fillteredValue={filteredValue} searchValue={search ?? ""} />
      </Suspense>
    </div>
  );
}
