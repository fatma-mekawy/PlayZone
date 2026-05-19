import React from "react";
import { Dumbbell, Users, Star, Zap } from "lucide-react";

export const metadata = {
  title: "Training Sessions | PlayZone Services",
};

const levels = [
  {
    label: "Beginner",
    color: "bg-green-50 text-green-700 border-green-200",
    desc: "Perfect if you're just getting started. Learn the basics in a supportive environment.",
  },
  {
    label: "Intermediate",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    desc: "Sharpen your technique and build tactical understanding of the game.",
  },
  {
    label: "Advanced",
    color: "bg-purple-50 text-purple-700 border-purple-200",
    desc: "High-intensity sessions for competitive players looking to reach the next level.",
  },
];

const perks = [
  {
    Icon: Star,
    title: "Expert Coaches",
    desc: "Trained professionals with years of competition experience.",
  },
  {
    Icon: Users,
    title: "Group & Solo",
    desc: "Choose private 1-on-1 coaching or join a group session.",
  },
  {
    Icon: Zap,
    title: "Performance Focused",
    desc: "Data-driven drills tailored to your specific goals.",
  },
];

export default function TrainingPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Hero card */}
      <div className="bg-white rounded-2xl border border-[#D6E2F0] shadow-sm overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
            alt="Training Sessions"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#059669]/80 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Training Sessions
            </span>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#1A2540] mb-2">
            Train with the Best
          </h2>
          <p className="text-[#64748B] text-sm leading-relaxed">
            Join professional training sessions with experienced coaches to
            improve your skills, fitness, and game IQ. Sessions available for
            all sports and skill levels.
          </p>
        </div>
      </div>

      {/* Perks */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {perks.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-xl border border-[#D6E2F0] p-5 shadow-sm"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center mb-3">
              <Icon size={17} className="text-emerald-600" />
            </div>
            <h3 className="text-sm font-bold text-[#1A2540] mb-1">{title}</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Skill levels */}
      <div className="bg-white rounded-2xl border border-[#D6E2F0] shadow-sm p-6">
        <h3 className="text-base font-bold text-[#1A2540] mb-5">
          Choose Your Level
        </h3>
        <div className="flex flex-col gap-4">
          {levels.map(({ label, color, desc }) => (
            <div
              key={label}
              className={`rounded-xl border p-4 flex items-start gap-4 ${color}`}
            >
              <Dumbbell size={18} className="mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-bold">{label}</p>
                <p className="text-xs mt-0.5 opacity-80">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
