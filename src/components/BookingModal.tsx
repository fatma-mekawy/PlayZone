"use client";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import { X, ShoppingCart, Plus, Minus } from "lucide-react";

interface Court {
  id: number;
  name: string;
  sport: string;
  location: string;
  image: string;
  pricePerHour: number;
  rating: number;
}

export default function BookingModal({ court }: { court: Court }) {
  const [open, setOpen] = useState(false);
  const [hours, setHours] = useState(1);
  const addItem = useCartStore((s) => s.addItem);
  const router = useRouter();

  function handleConfirm() {
    addItem({
      id: court.id,
      name: court.name,
      sport: court.sport,
      location: court.location,
      image: court.image,
      pricePerHour: court.pricePerHour,
      hours,
    });
    setOpen(false);
    router.push("/cart");
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-[#1E56A0] hover:bg-[#163D73] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
      >
        <ShoppingCart size={18} /> Book Now
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-[#D6E2F0] w-full max-w-md">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#D6E2F0]">
              <h2 className="text-xl font-bold text-[#1A2540]">
                Confirm Booking
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-[#F4F7FB] rounded-lg transition-colors text-[#94A3B8]"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="bg-[#F4F7FB] rounded-xl p-4 mb-6 border border-[#D6E2F0]">
                <p className="font-semibold text-[#1A2540]">{court.name}</p>
                <p className="text-sm text-[#64748B] capitalize">
                  {court.sport} · {court.location}
                </p>
                <p className="text-sm font-semibold text-[#1E56A0] mt-1">
                  ${court.pricePerHour}/hr
                </p>
              </div>

              <label className="text-sm font-semibold text-[#64748B] block mb-3">
                Number of hours
              </label>
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => setHours(Math.max(1, hours - 1))}
                  className="w-10 h-10 rounded-xl border border-[#D6E2F0] flex items-center justify-center hover:bg-[#F4F7FB] text-[#1A2540] transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="text-2xl font-bold text-[#1A2540] w-8 text-center">
                  {hours}
                </span>
                <button
                  onClick={() => setHours(Math.min(12, hours + 1))}
                  className="w-10 h-10 rounded-xl border border-[#D6E2F0] flex items-center justify-center hover:bg-[#F4F7FB] text-[#1A2540] transition-colors"
                >
                  <Plus size={16} />
                </button>
                <span className="text-sm text-[#94A3B8] ml-2">max 12 hrs</span>
              </div>

              <div className="flex items-center justify-between bg-[#EEF3FA] rounded-xl px-5 py-4 mb-6 border border-[#D6E2F0]">
                <span className="text-sm font-medium text-[#64748B]">
                  Total
                </span>
                <span className="text-xl font-extrabold text-[#1E56A0]">
                  ${(court.pricePerHour * hours).toFixed(2)}
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="flex-1 border border-[#D6E2F0] text-[#64748B] hover:bg-[#F4F7FB] font-medium py-3 rounded-xl transition-colors text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 bg-[#1E56A0] hover:bg-[#163D73] text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
