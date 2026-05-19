"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="w-3/4 mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-[#237cbd] tracking-widest mb-8">
        Contact Us
      </h1>

      {sent ? (
        <p className="text-green-400 text-xl font-semibold">
          Message sent! We will get back to you soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-[#1F2A3B] rounded-2xl p-8 shadow-lg flex flex-col gap-6"
        >
          <div>
            <label className="text-white font-semibold block mb-2">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-[#243447] text-white border border-[#237cbd] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#237cbd]"
            />
          </div>

          <div>
            <label className="text-white font-semibold block mb-2">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-[#243447] text-white border border-[#237cbd] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#237cbd]"
            />
          </div>

          <div>
            <label className="text-white font-semibold block mb-2">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-[#243447] text-white border border-[#237cbd] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#237cbd]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#237cbd] text-white px-6 py-3 rounded-full hover:bg-[#1a5e8a] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
