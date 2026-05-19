"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Globe, Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
const registerSchema = loginSchema
  .extend({
    name: z.string().min(2, "Name must be at least 2 characters"),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type LoginForm = z.infer<typeof loginSchema>;
type RegisterForm = z.infer<typeof registerSchema>;

export default function LoginPage() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [showPw, setShowPw] = useState(false);

  const loginForm = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });
  const registerForm = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  function onLoginSubmit(data: LoginForm) {
    console.log("Login:", data);
  }
  function onRegisterSubmit(data: RegisterForm) {
    console.log("Register:", data);
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#F4F7FB] px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#D6E2F0] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#1E56A0] to-[#3B82F6] p-8 text-center">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-black text-xl">PZ</span>
            </div>
            <h1 className="text-2xl font-extrabold text-white">
              Welcome to PlayZone
            </h1>
            <p className="text-blue-100 text-sm mt-1">
              Book courts, play better
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#D6E2F0]">
            {(["login", "register"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={clsx(
                  "flex-1 py-3 text-sm font-semibold capitalize transition-colors",
                  tab === t
                    ? "text-[#1E56A0] border-b-2 border-[#1E56A0]"
                    : "text-[#94A3B8] hover:text-[#1A2540]",
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="p-8">
            {/* Social Buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="flex items-center justify-center gap-3 w-full border border-[#D6E2F0] bg-white hover:bg-[#F4F7FB] text-[#1A2540] font-medium py-2.5 rounded-xl transition-colors text-sm"
              >
                <Globe size={18} className="text-[#4285F4]" />
                Continue with Google
              </button>
              <button
                onClick={() => signIn("facebook", { callbackUrl: "/" })}
                className="flex items-center justify-center gap-3 w-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-medium py-2.5 rounded-xl transition-colors text-sm"
              >
                <Globe size={18} />
                Continue with Facebook
              </button>
            </div>

            

            

            {/* Register Form */}
            {tab === "register" && (
              <form
                onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
                className="flex flex-col gap-4"
              >
                <div>
                  <label className="text-xs font-semibold text-[#64748B] mb-1 block">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                    />
                    <input
                      {...registerForm.register("name")}
                      type="text"
                      placeholder="Your name"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#D6E2F0] bg-[#F4F7FB] text-[#1A2540] text-sm outline-none focus:ring-2 focus:ring-[#1E56A0]/30 focus:border-[#1E56A0] placeholder-[#94A3B8]"
                    />
                  </div>
                  {registerForm.formState.errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {registerForm.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#64748B] mb-1 block">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                    />
                    <input
                      {...registerForm.register("email")}
                      type="email"
                      placeholder="you@example.com"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#D6E2F0] bg-[#F4F7FB] text-[#1A2540] text-sm outline-none focus:ring-2 focus:ring-[#1E56A0]/30 focus:border-[#1E56A0] placeholder-[#94A3B8]"
                    />
                  </div>
                  {registerForm.formState.errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {registerForm.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#64748B] mb-1 block">
                    Password
                  </label>
                  <div className="relative">
                    <Lock
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                    />
                    <input
                      {...registerForm.register("password")}
                      type={showPw ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-[#D6E2F0] bg-[#F4F7FB] text-[#1A2540] text-sm outline-none focus:ring-2 focus:ring-[#1E56A0]/30 focus:border-[#1E56A0] placeholder-[#94A3B8]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw(!showPw)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                    >
                      {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {registerForm.formState.errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {registerForm.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#64748B] mb-1 block">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                    />
                    <input
                      {...registerForm.register("confirmPassword")}
                      type={showPw ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#D6E2F0] bg-[#F4F7FB] text-[#1A2540] text-sm outline-none focus:ring-2 focus:ring-[#1E56A0]/30 focus:border-[#1E56A0] placeholder-[#94A3B8]"
                    />
                  </div>
                  {registerForm.formState.errors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">
                      {registerForm.formState.errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#1E56A0] hover:bg-[#163D73] text-white font-semibold py-2.5 rounded-xl transition-colors mt-1 text-sm"
                >
                  Create Account <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        
      </div>
    </div>
  );
}
