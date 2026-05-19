import React from "react";
import Image from "next/image";
import BookingModal from "@/components/BookingModal";
import { MapPin, Star, Clock, Trophy } from "lucide-react";

function getCourtData() {
  return fetch("https://6a0134b236fb6ad04de0b483.mockapi.io/courts").then((r) =>
    r.json(),
  );
}

interface Props {
  params: Promise<{ courtid: string }>;
}

export default async function CourtId({ params }: Props) {
  const { courtid } = await params;
  const court = (await getCourtData().then((data: { id: string }[]) =>
    data.find((c) => c.id === courtid),
  )) as
    | {
        id: number;
        name: string;
        sport: string;
        location: string;
        image: string;
        pricePerHour: number;
        rating: number;
        description?: string;
      }
    | undefined;

  if (!court)
    return (
      <div className="text-center py-20 text-[#94A3B8]">Court not found.</div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-sm border border-[#D6E2F0] overflow-hidden">
        {/* Hero image */}
        <div className="relative h-72 w-full">
          <Image
            src={court.image}
            alt={court.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className="absolute bottom-4 left-6 bg-white/90 backdrop-blur text-[#1E56A0] text-sm font-bold px-4 py-1.5 rounded-full capitalize">
            {court.sport}
          </span>
        </div>

        {/* Details */}
        <div className="p-8">
          <h1 className="text-3xl font-extrabold text-[#1A2540] mb-6">
            {court.name}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { Icon: MapPin, label: "Location", value: court.location },
              { Icon: Star, label: "Rating", value: `${court.rating} / 5` },
              {
                Icon: Clock,
                label: "Price/hr",
                value: `$${court.pricePerHour.toFixed(2)}`,
              },
              { Icon: Trophy, label: "Sport", value: court.sport },
            ].map(({ Icon, label, value }) => (
              <div
                key={label}
                className="bg-[#F4F7FB] rounded-xl p-4 flex flex-col gap-1 border border-[#D6E2F0]"
              >
                <div className="flex items-center gap-1.5 text-[#94A3B8]">
                  <Icon size={14} />
                  <span className="text-xs font-medium">{label}</span>
                </div>
                <span className="text-sm font-semibold text-[#1A2540] capitalize">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {court.description && (
            <p className="text-[#64748B] text-sm leading-relaxed mb-8">
              {court.description}
            </p>
          )}

          <BookingModal court={court} />
        </div>
      </div>
    </div>
  );
}
