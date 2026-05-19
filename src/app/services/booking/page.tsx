import React from "react";
import Link from "next/link";
import {
  CalendarCheck,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Court Booking | PlayZone Services",
};

const steps = [
  {
    step: "01",
    title: "Choose a Court",
    desc: "Browse our selection of football, padel, basketball and tennis courts.",
  },
  {
    step: "02",
    title: "Pick Your Slot",
    desc: "Select a date and the number of hours that work for you.",
  },
  {
    step: "03",
    title: "Confirm & Pay",
    desc: "Review your booking and complete the reservation securely.",
  },
  {
    step: "04",
    title: "Play!",
    desc: "Show up and enjoy your game. It's that simple.",
  },
];

const features = [
  {
    Icon: CalendarCheck,
    title: "Instant Confirmation",
    desc: "Get your booking confirmed immediately after checkout.",
  },
  {
    Icon: Clock,
    title: "Flexible Hours",
    desc: "Book from 1 to 12 hours, any time of the day.",
  },
  {
    Icon: MapPin,
    title: "Prime Locations",
    desc: "Courts across the city, always close to you.",
  },
];

export default function BookingPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Hero card */}
      <div className="bg-white rounded-2xl border border-[#D6E2F0] shadow-sm overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop"
            alt="Court Booking"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E56A0]/80 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Court Booking
            </span>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#1A2540] mb-2">
            Reserve Your Court
          </h2>
          <p className="text-[#64748B] text-sm leading-relaxed mb-5">
            Easily book football, padel, basketball, and tennis courts with
            flexible schedules and affordable hourly prices. Find the perfect
            court near you and secure your slot in minutes.
          </p>
          <Link
            href="/courts"
            className="inline-flex items-center gap-2 bg-[#1E56A0] hover:bg-[#163D73] text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
          >
            Browse Courts <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {features.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-xl border border-[#D6E2F0] p-5 shadow-sm"
          >
            <div className="w-9 h-9 rounded-lg bg-[#EEF3FA] flex items-center justify-center mb-3">
              <Icon size={17} className="text-[#1E56A0]" />
            </div>
            <h3 className="text-sm font-bold text-[#1A2540] mb-1">{title}</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="bg-white rounded-2xl border border-[#D6E2F0] shadow-sm p-6">
        <h3 className="text-base font-bold text-[#1A2540] mb-5">
          How it works
        </h3>
        <div className="flex flex-col gap-4">
          {steps.map(({ step, title, desc }) => (
            <div key={step} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-[#EEF3FA] flex items-center justify-center shrink-0">
                <span className="text-xs font-black text-[#1E56A0]">
                  {step}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A2540]">{title}</p>
                <p className="text-xs text-[#94A3B8] mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
