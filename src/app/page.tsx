import Link from "next/link";
import { ArrowRight, Star, MapPin, Shield } from "lucide-react";

const stats = [
  { value: "50+", label: "Courts Available" },
  { value: "4.9", label: "Average Rating" },
  { value: "2k+", label: "Happy Players" },
];

export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden min-h-[500px] shadow-xl border border-[#D6E2F0]">
        <img src="/home.png" alt="Sports Court" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E56A0]/90 via-[#1E56A0]/70 to-[#3B82F6]/50" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] text-center p-10">
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            <Star size={12} fill="currentColor" /> PlayZone — Book. Play. Win.
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-white leading-tight max-w-2xl">
            Book Your Favorite <span className="text-blue-200">Sports Court</span> Anytime
          </h1>
          <p className="text-white/80 text-lg mb-10 max-w-xl leading-relaxed">
            Discover premium football, padel, basketball, and tennis courts near you. Fast booking, flexible schedules.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/courts" className="flex items-center gap-2 bg-white text-[#1E56A0] font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
              Explore Courts <ArrowRight size={16} />
            </Link>
            <Link href="/about" className="border border-white/50 text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {stats.map(({ value, label }) => (
          <div key={label} className="bg-white rounded-xl border border-[#D6E2F0] p-5 text-center shadow-sm">
            <p className="text-3xl font-extrabold text-[#1E56A0]">{value}</p>
            <p className="text-sm text-[#94A3B8] mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Features row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {[
          { Icon: Star,    title: "Top-Rated Courts",  desc: "All courts vetted and rated by real players." },
          { Icon: MapPin,  title: "Prime Locations",   desc: "Courts across major districts in the city." },
          { Icon: Shield,  title: "Secure Booking",    desc: "Safe payments and instant confirmation." },
        ].map(({ Icon, title, desc }) => (
          <div key={title} className="bg-white rounded-xl border border-[#D6E2F0] p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-[#EEF3FA] flex items-center justify-center mb-3">
              <Icon size={20} className="text-[#1E56A0]" />
            </div>
            <h3 className="font-bold text-[#1A2540] mb-1">{title}</h3>
            <p className="text-sm text-[#94A3B8]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
