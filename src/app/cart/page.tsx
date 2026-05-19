"use client";
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingCart, MapPin, Clock, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCartStore();
  const total = items.reduce(
    (sum, item) => sum + item.pricePerHour * item.hours,
    0,
  );

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 rounded-2xl bg-[#EEF3FA] flex items-center justify-center mx-auto mb-6 border border-[#D6E2F0]">
          <ShoppingCart size={36} className="text-[#94A3B8]" />
        </div>
        <h1 className="text-2xl font-extrabold text-[#1A2540] mb-2">
          Your cart is empty
        </h1>
        <p className="text-[#94A3B8] mb-8">
          You haven't booked any courts yet.
        </p>
        <Link
          href="/courts"
          className="inline-flex items-center gap-2 bg-[#1E56A0] hover:bg-[#163D73] text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          Browse Courts <ArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-[#1A2540]">Your Cart</h1>
          <p className="text-[#94A3B8] text-sm mt-1">
            {items.length} booking{items.length > 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={clearCart}
          className="text-sm text-red-400 hover:text-red-500 font-medium flex items-center gap-1 transition-colors"
        >
          <Trash2 size={14} /> Clear all
        </button>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-[#D6E2F0] p-5 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={90}
              height={70}
              className="rounded-xl object-cover h-[70px] w-[90px] shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-[#1A2540] text-base truncate">
                {item.name}
              </h2>
              <div className="flex flex-wrap gap-3 mt-1 text-xs text-[#64748B]">
                <span className="flex items-center gap-1">
                  <MapPin size={11} /> {item.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={11} /> {item.hours} hr{item.hours > 1 ? "s" : ""}
                </span>
                <span className="capitalize bg-[#EEF3FA] text-[#1E56A0] px-2 py-0.5 rounded-full font-medium">
                  {item.sport}
                </span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="text-lg font-extrabold text-[#1A2540]">
                ${(item.pricePerHour * item.hours).toFixed(2)}
              </p>
              <p className="text-xs text-[#94A3B8]">${item.pricePerHour}/hr</p>
              <button
                onClick={() => removeItem(item.id)}
                className="mt-2 text-red-400 hover:text-red-500 transition-colors"
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-white rounded-2xl border border-[#D6E2F0] p-6 shadow-sm">
        <h2 className="font-bold text-[#1A2540] text-lg mb-4">Order Summary</h2>
        <div className="flex justify-between text-sm text-[#64748B] mb-2">
          <span>Subtotal ({items.length} courts)</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-[#64748B] mb-4">
          <span>Service fee</span>
          <span className="text-green-500 font-medium">Free</span>
        </div>
        <div className="border-t border-[#D6E2F0] pt-4 flex justify-between font-extrabold text-[#1A2540] text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full mt-5 bg-[#1E56A0] hover:bg-[#163D73] text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
          Proceed to Checkout <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
