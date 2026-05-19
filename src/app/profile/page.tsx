"use client";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { User, Mail, Phone, Save, ShoppingCart, Heart } from "lucide-react";
import { useCartStore, useFavStore } from "@/store/cartStore";
import clsx from "clsx";
import { redirect } from "next/navigation";

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().optional(),
  bio: z.string().max(200, "Max 200 characters").optional(),
});
type ProfileForm = z.infer<typeof profileSchema>;

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const cartItems = useCartStore((s) => s.items);
  const favs = useFavStore((s) => s.favs);

  const form = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: session?.user?.name ?? "", phone: "", bio: "" },
  });

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 rounded-full border-2 border-[#1E56A0] border-t-transparent animate-spin" />
      </div>
    );
  }
  if (!session) {
    redirect("/login");
  }

  function onSubmit(data: ProfileForm) {
    alert(`Profile saved!\n${JSON.stringify(data, null, 2)}`);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold text-[#1A2540] mb-8">
        My Profile
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Avatar + stats */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-[#D6E2F0] p-6 text-center shadow-sm">
            {session.user?.image ? (
              <Image
                src={session.user.image}
                alt="Avatar"
                width={80}
                height={80}
                className="rounded-full mx-auto mb-3 object-cover w-20 h-20"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-[#1E56A0] flex items-center justify-center mx-auto mb-3 text-white text-2xl font-bold">
                {session.user?.name?.[0]?.toUpperCase() ?? "U"}
              </div>
            )}
            <h2 className="font-bold text-[#1A2540]">{session.user?.name}</h2>
            <p className="text-xs text-[#94A3B8] mt-0.5">
              {session.user?.email}
            </p>
          </div>

          {/* Quick stats */}
          {[
            {
              Icon: ShoppingCart,
              label: "Cart bookings",
              value: cartItems.length,
            },
            { Icon: Heart, label: "Favourites", value: favs.length },
          ].map(({ Icon, label, value }) => (
            <div
              key={label}
              className="bg-white rounded-xl border border-[#D6E2F0] p-4 shadow-sm flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EEF3FA] flex items-center justify-center">
                <Icon size={18} className="text-[#1E56A0]" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-[#1A2540]">{value}</p>
                <p className="text-xs text-[#94A3B8]">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Edit form */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-[#D6E2F0] p-6 shadow-sm">
          <h2 className="font-bold text-[#1A2540] text-lg mb-6">
            Edit Profile
          </h2>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div>
              <label className="text-xs font-semibold text-[#64748B] mb-1 block">
                Full Name
              </label>
              <div className="relative">
                <User
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                />
                <input
                  {...form.register("name")}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#D6E2F0] bg-[#F4F7FB] text-[#1A2540] text-sm outline-none focus:ring-2 focus:ring-[#1E56A0]/30 focus:border-[#1E56A0]"
                />
              </div>
              {form.formState.errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-xs font-semibold text-[#64748B] mb-1 block">
                Email{" "}
                <span className="text-[#94A3B8] font-normal">
                  (from account)
                </span>
              </label>
              <div className="relative">
                <Mail
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                />
                <input
                  value={session.user?.email ?? ""}
                  disabled
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#D6E2F0] bg-[#F4F7FB] text-[#94A3B8] text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-[#64748B] mb-1 block">
                Phone (optional)
              </label>
              <div className="relative">
                <Phone
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                />
                <input
                  {...form.register("phone")}
                  type="tel"
                  placeholder="+1 234 567 8900"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#D6E2F0] bg-[#F4F7FB] text-[#1A2540] text-sm outline-none focus:ring-2 focus:ring-[#1E56A0]/30 focus:border-[#1E56A0] placeholder-[#94A3B8]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-[#64748B] mb-1 block">
                Bio
              </label>
              <textarea
                {...form.register("bio")}
                rows={3}
                placeholder="Tell us a little about yourself..."
                className="w-full px-4 py-2.5 rounded-xl border border-[#D6E2F0] bg-[#F4F7FB] text-[#1A2540] text-sm outline-none focus:ring-2 focus:ring-[#1E56A0]/30 focus:border-[#1E56A0] placeholder-[#94A3B8] resize-none"
              />
              {form.formState.errors.bio && (
                <p className="text-red-500 text-xs mt-1">
                  {form.formState.errors.bio.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#1E56A0] hover:bg-[#163D73] text-white font-semibold py-3 rounded-xl transition-colors text-sm"
            >
              <Save size={16} /> Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
