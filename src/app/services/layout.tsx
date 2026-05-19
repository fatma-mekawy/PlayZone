import React from "react";
import Link from "next/link";
import { CalendarCheck, Dumbbell, ChevronRight } from "lucide-react";

const serviceLinks = [
  {
    href: "/services/booking",
    label: "Court Booking",
    description: "Reserve your court slot",
    Icon: CalendarCheck,
  },
  {
    href: "/services/training",
    label: "Training Sessions",
    description: "Train with pro coaches",
    Icon: Dumbbell,
  },
];

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-8">
        <Link href="/" className="hover:text-[#1E56A0] transition-colors">
          Home
        </Link>
        <ChevronRight size={12} />
        <span className="text-[#1E56A0] font-semibold">Services</span>
      </div>

      {/* Page title */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[#1A2540]">
          Our <span className="text-[#1E56A0]">Services</span>
        </h1>
        <p className="text-[#94A3B8] text-sm mt-1">
          Everything you need to play, train, and compete.
        </p>
      </div>

      {/* Two-column layout: sidebar + content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar nav */}
        <aside className="w-full md:w-60 shrink-0">
          <nav className="bg-white rounded-2xl border border-[#D6E2F0] shadow-sm p-2 flex flex-col gap-1 sticky top-24">
            {serviceLinks.map(({ href, label, description, Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#EEF3FA] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#EEF3FA] group-hover:bg-[#1E56A0]/10 flex items-center justify-center shrink-0 transition-colors">
                  <Icon size={17} className="text-[#1E56A0]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#1A2540] leading-tight">
                    {label}
                  </p>
                  <p className="text-xs text-[#94A3B8] truncate">
                    {description}
                  </p>
                </div>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content slot */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
