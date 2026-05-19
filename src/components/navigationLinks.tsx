"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useCartStore } from "@/store/cartStore";
import { useFavStore } from "@/store/cartStore";
import { ShoppingCart, Heart, LogIn, LogOut, ChevronDown } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

export default function NavigationLinks({ links }: { links: NavLink[] }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const items = useCartStore((s) => s.items);
  const favs = useFavStore((s) => s.favs);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#D6E2F0] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.svg"
            alt="PlayZone"
            width={180}
            height={55}
            className="object-contain"
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150",
                pathname === link.href
                  ? "bg-[#EEF3FA] text-[#1E56A0] font-semibold"
                  : "text-[#64748B] hover:bg-[#F4F7FB] hover:text-[#1A2540]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side icons */}
        <div className="flex items-center gap-2">
          {/* Favourites */}
          <Link
            href="/favourites"
            className="relative p-2 rounded-lg hover:bg-[#F4F7FB] text-[#64748B] hover:text-[#1E56A0] transition-colors"
          >
            <Heart size={20} />
            {favs.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {favs.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative p-2 rounded-lg hover:bg-[#F4F7FB] text-[#64748B] hover:text-[#1E56A0] transition-colors"
          >
            <ShoppingCart size={20} />
            {items.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#1E56A0] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {items.length}
              </span>
            )}
          </Link>

          {/* AUTH */}
          {session ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full border border-[#D6E2F0] hover:border-[#1E56A0]/40 transition-colors"
              >
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name ?? "User"}
                    width={30}
                    height={30}
                    className="rounded-full object-cover w-[30px] h-[30px]"
                  />
                ) : (
                  <div className="w-[30px] h-[30px] rounded-full bg-[#1E56A0] flex items-center justify-center text-white text-sm font-bold">
                    {session.user?.name?.[0]?.toUpperCase() ?? "U"}
                  </div>
                )}
                <span className="hidden md:block text-sm font-medium text-[#1A2540] max-w-[100px] truncate">
                  {session.user?.name?.split(" ")[0]}
                </span>
                <ChevronDown size={14} className="text-[#94A3B8]" />
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-[#D6E2F0] rounded-xl shadow-lg py-1 z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2.5 text-sm text-[#1A2540] hover:bg-[#F4F7FB] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/favourites"
                    className="block px-4 py-2.5 text-sm text-[#1A2540] hover:bg-[#F4F7FB] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Favourites
                  </Link>
                  <hr className="my-1 border-[#D6E2F0]" />
                  <button
                    onClick={() => {
                      signOut();
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors flex items-center gap-2"
                  >
                    <LogOut size={14} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-1.5 bg-[#1E56A0] hover:bg-[#163D73] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              <LogIn size={14} /> Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
