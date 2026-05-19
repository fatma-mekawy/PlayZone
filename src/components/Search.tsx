"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";
import React from "react";

export default function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSearch(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) params.set("search", value);
    else params.delete("search");
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mb-6 relative w-full md:w-96">
      <SearchIcon
        size={16}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]"
      />
      <input
        type="text"
        placeholder="Search by sport name..."
        defaultValue={searchParams.get("search") ?? ""}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full bg-white text-[#1A2540] border border-[#D6E2F0] rounded-full pl-10 pr-5 py-2.5 outline-none focus:ring-2 focus:ring-[#1E56A0]/30 focus:border-[#1E56A0] placeholder-[#94A3B8] text-sm transition-all duration-200 shadow-sm"
      />
    </div>
  );
}
