"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  MapPin,
  Star,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useFavStore, FavCourt } from "@/store/cartStore";
import clsx from "clsx";

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

export default function CourtCard({ court }: { court: Court }) {
  const { toggleFav, isFav } = useFavStore();
  const faved = isFav(court.id);
  const [showDesc, setShowDesc] = useState(false);

  const favCourt: FavCourt = {
    id: court.id,
    name: court.name,
    sport: court.sport,
    location: court.location,
    image: court.image,
    pricePerHour: court.pricePerHour,
    rating: court.rating,
  };

  const description =
    court.description ??
    `${court.name} is a premium ${court.sport} court located in ${court.location}. Book your slot and enjoy a professional playing experience with great facilities and flexible scheduling.`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[#D6E2F0] hover:shadow-md hover:border-[#1E56A0]/30 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <Image
          src={court.image}
          alt={court.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Sport badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1E56A0] text-xs font-bold px-3 py-1 rounded-full border border-[#D6E2F0] capitalize">
          {court.sport}
        </span>
        {/* Fav button */}
        <button
          onClick={() => toggleFav(favCourt)}
          className={clsx(
            "absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm",
            faved
              ? "bg-red-500 text-white"
              : "bg-white/90 backdrop-blur-sm text-[#94A3B8] hover:text-red-400 hover:bg-white",
          )}
          aria-label={faved ? "Remove from favourites" : "Add to favourites"}
        >
          <Heart size={15} fill={faved ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Body */}
      <div className="p-5">
        <h2 className="text-lg font-bold text-[#1A2540] mb-3 leading-tight">
          {court.name}
        </h2>

        <div className="flex flex-col gap-1.5 mb-4 text-sm text-[#64748B]">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#94A3B8] shrink-0" />
            <span>{court.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-[#94A3B8] shrink-0" />
            <span className="font-semibold text-[#1E56A0]">
              ${court.pricePerHour}/hr
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Star
              size={14}
              className="text-amber-400 fill-amber-400 shrink-0"
            />
            <span>{court.rating} rating</span>
          </div>
        </div>

        {/* Description see more/less */}
        <div className="mb-4">
          <p
            className={clsx(
              "text-xs text-[#94A3B8] leading-relaxed",
              !showDesc && "line-clamp-2",
            )}
          >
            {description}
          </p>
          <button
            onClick={() => setShowDesc(!showDesc)}
            className="flex items-center gap-1 text-[#1E56A0] text-xs font-medium mt-1 hover:underline"
          >
            {showDesc ? (
              <>
                <ChevronUp size={12} /> See less
              </>
            ) : (
              <>
                <ChevronDown size={12} /> See more
              </>
            )}
          </button>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/courts/${court.id}`}
            className="flex-1 text-center border border-[#D6E2F0] text-[#64748B] hover:border-[#1E56A0] hover:text-[#1E56A0] text-sm font-semibold py-2 rounded-xl transition-colors"
          >
            Details
          </Link>
          <Link
            href={`/courts/${court.id}`}
            className="flex-1 text-center bg-[#1E56A0] hover:bg-[#163D73] text-white text-sm font-semibold py-2 rounded-xl transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
