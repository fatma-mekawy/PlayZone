"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Layers, Volleyball, CircleDot, Trophy } from "lucide-react";
import clsx from "clsx";
import React from "react";

const sports = [
  { value: "all", label: "All Courts", Icon: Layers },
  { value: "football", label: "Football", Icon: CircleDot },
  { value: "basketball", label: "Basketball", Icon: Trophy },
  { value: "padel", label: "Padel", Icon: Volleyball },
];

export default function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = searchParams.get("sport") ?? "all";

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("sport", filter);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {sports.map(({ value, label, Icon }) => (
        <button
          key={value}
          onClick={() => handleFilter(value)}
          className={clsx(
            "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200",
            current === value
              ? "bg-[#1E56A0] text-white border-[#1E56A0] shadow-md"
              : "bg-white text-[#64748B] border-[#D6E2F0] hover:border-[#1E56A0] hover:text-[#1E56A0]",
          )}
        >
          <Icon size={14} />
          {label}
        </button>
      ))}
    </div>
  );
}
