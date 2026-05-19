import React from "react";
import { Zap, Layers, Trophy, ShieldCheck, Users, Clock } from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "Learn more about PlayZone, our mission, and how we strive to provide the best experience for booking sport courts and enjoying games with friends.",
};

const features = [
  {
    icon: Zap,
    title: "Easy & Fast Booking",
    desc: "Reserve your court in under a minute — no phone calls, no waiting.",
  },
  {
    icon: Layers,
    title: "Multiple Sports",
    desc: "Football, padel, basketball, and tennis all in one place.",
  },
  {
    icon: Trophy,
    title: "Top-Rated Facilities",
    desc: "Every court is vetted and reviewed by real players.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    desc: "Safe payments and instant booking confirmation every time.",
  },
  {
    icon: Clock,
    title: "Flexible Schedules",
    desc: "Book morning, afternoon, or evening — slots available 7 days a week.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "Join thousands of players who trust PlayZone for their weekly games.",
  },
];



export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      {/* Hero card */}
      <section className="relative rounded-2xl overflow-hidden border border-[#D6E2F0] shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E56A0] to-[#3B82F6]" />
        <div className="relative z-10 px-10 py-14 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-white/60 uppercase mb-3">
            Our Story
          </span>
          <h1 className="text-4xl font-extrabold text-white mb-5">
            About <span className="text-blue-200">PlayZone</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Your ultimate destination for booking premium sports courts online.
            We make finding and reserving football, padel, basketball, and
            tennis courts{" "}
            <strong className="text-white">fast, simple, and convenient</strong>
            .
          </p>
        </div>
      </section>

      

      {/* Mission */}
      <section className="bg-white rounded-2xl border border-[#D6E2F0] shadow-sm p-8 md:p-10">
        <h2 className="text-2xl font-extrabold text-[#1A2540] mb-4">
          Our Mission
        </h2>
        <div className="space-y-4 text-[#64748B] leading-relaxed">
          <p>
            Whether you are planning a friendly match with your friends or
            organizing a professional training session, PlayZone helps you
            discover the best courts near you with flexible booking times and
            affordable prices.
          </p>
          <p>
            We aim to improve the sports experience by connecting players with
            modern, high-quality sports facilities through a smooth and
            user-friendly platform.
          </p>
          <p>
            At PlayZone, we believe sports bring people together, build
            teamwork, and create unforgettable moments. Start your journey today
            and book your next match with ease.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-2xl font-extrabold text-[#1A2540] mb-5">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-xl border border-[#D6E2F0] p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EEF3FA] flex items-center justify-center mb-4">
                <Icon size={20} className="text-[#1E56A0]" />
              </div>
              <h3 className="font-bold text-[#1A2540] mb-1">{title}</h3>
              <p className="text-sm text-[#94A3B8]">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
