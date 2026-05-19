import React from "react";
import Link from "next/link";
import { CalendarCheck, Dumbbell, ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Services | PlayZone",
  description:
    "Discover the range of services offered by PlayZone, including court booking and training sessions.",
};

const services = [
  {
    href: "/services/booking",
    label: "Court Booking",
    description:
      "Easily book football, padel, basketball, and tennis courts with flexible schedules and affordable hourly prices.",
    Icon: CalendarCheck,
    color: "from-[#1E56A0] to-[#3B82F6]",
    features: ["Instant confirmation", "Flexible hours", "Multiple sports"],
  },
  {
    href: "/services/training",
    label: "Training Sessions",
    description:
      "Join professional training sessions with experienced coaches to improve your skills and fitness performance.",
    Icon: Dumbbell,
    color: "from-[#059669] to-[#34D399]",
    features: ["Expert coaches", "All skill levels", "Group & solo sessions"],
  },
];

export default function ServicesPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {services.map(({ href, label, description, Icon, color, features }) => (
        <Link
          key={href}
          href={href}
          className="group bg-white rounded-2xl border border-[#D6E2F0] shadow-sm hover:shadow-md hover:border-[#1E56A0]/30 transition-all duration-300 overflow-hidden"
        >
          {/* Card header gradient */}
          <div className={`bg-gradient-to-br ${color} p-6`}>
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-3">
              <Icon size={24} className="text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">{label}</h2>
          </div>

          {/* Card body */}
          <div className="p-6">
            <p className="text-[#64748B] text-sm leading-relaxed mb-5">
              {description}
            </p>
            <ul className="flex flex-col gap-2 mb-5">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-[#1A2540]"
                >
                  <CheckCircle size={14} className="text-[#22C55E] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 text-[#1E56A0] text-sm font-semibold group-hover:gap-3 transition-all">
              Learn more <ArrowRight size={15} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
