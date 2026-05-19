"use client";
import { useFavStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, Star, Clock, ArrowRight } from "lucide-react";

export default function FavouritesPage() {
  const { favs, toggleFav } = useFavStore();

  if (favs.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-6 border border-red-100">
          <Heart size={36} className="text-red-300" />
        </div>
        <h1 className="text-2xl font-extrabold text-[#1A2540] mb-2">No favourites yet</h1>
        <p className="text-[#94A3B8] mb-8">Save courts you love by tapping the heart icon.</p>
        <Link href="/courts" className="inline-flex items-center gap-2 bg-[#1E56A0] hover:bg-[#163D73] text-white font-semibold px-8 py-3 rounded-xl transition-colors">
          Browse Courts <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[#1A2540]">Favourites</h1>
        <p className="text-[#94A3B8] text-sm mt-1">{favs.length} saved court{favs.length > 1 ? "s" : ""}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {favs.map((court) => (
          <div key={court.id} className="bg-white rounded-2xl border border-[#D6E2F0] overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
            <div className="relative h-44 overflow-hidden">
              <Image src={court.image} alt={court.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <button
                onClick={() => toggleFav(court)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center shadow"
                aria-label="Remove from favourites"
              >
                <Heart size={14} fill="currentColor" />
              </button>
              <span className="absolute top-3 left-3 bg-white/90 text-[#1E56A0] text-xs font-bold px-3 py-1 rounded-full capitalize">
                {court.sport}
              </span>
            </div>
            <div className="p-5">
              <h2 className="font-bold text-[#1A2540] text-base mb-3">{court.name}</h2>
              <div className="flex flex-col gap-1.5 mb-4 text-xs text-[#64748B]">
                <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#94A3B8]" />{court.location}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} className="text-[#94A3B8]" />${court.pricePerHour}/hr</span>
                <span className="flex items-center gap-1.5"><Star size={12} className="text-amber-400 fill-amber-400" />{court.rating} rating</span>
              </div>
              <Link href={`/courts/${court.id}`} className="block text-center bg-[#1E56A0] hover:bg-[#163D73] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}