import React from "react";
import CourtCard from "./CourtCard";

interface Court {
  id: number;
  name: string;
  location: string;
  image: string;
  pricePerHour: number;
  sport: string;
  rating: number;
  description?: string;
}

interface Props {
  fillteredValue: string;
  searchValue: string;
}

export default async function Courtlist({
  fillteredValue,
  searchValue,
}: Props) {
  const res = await fetch("https://6a0134b236fb6ad04de0b483.mockapi.io/courts");
  const courts: Court[] = await res.json();

  let filtered = courts;
  if (fillteredValue !== "all") {
    filtered = courts.filter((c) => c.sport.toLowerCase() === fillteredValue);
  }
  if (searchValue) {
    filtered = filtered.filter(
      (c) =>
        c.sport.toLowerCase().includes(searchValue.toLowerCase()) ||
        c.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="col-span-2 text-center py-20">
        <p className="text-[#94A3B8] text-lg">No courts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filtered.map((c) => (
        <CourtCard key={c.id} court={c} />
      ))}
    </div>
  );
}
