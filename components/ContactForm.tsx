"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-golden/10 border-2 border-golden/40 rounded-3xl p-10 text-center">
        <CheckCircle size={48} className="text-golden mx-auto mb-4" />
        <h3
          className="text-2xl font-bold text-espresso mb-3"
          style={{ fontFamily: "var(--font-fredoka)" }}
        >
          Message Received!
        </h3>
        <p className="text-espresso/65 leading-relaxed">
          Thank you, <strong>{form.name || "friend"}</strong>! We&apos;ll get back
          to you after our morning café de olla. ☠
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", message: "" });
          }}
          className="mt-6 text-crimson text-sm font-bold underline underline-offset-2 hover:text-crimson-dark transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-parchment border-2 border-golden/30 rounded-xl px-5 py-4 text-espresso placeholder:text-espresso/30 text-sm focus:outline-none focus:border-golden focus:ring-2 focus:ring-golden/20 transition-all";

  const labelClass =
    "block text-xs font-bold tracking-[0.15em] uppercase text-espresso/60 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>Your Name</label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Rosa Hernández"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email Address</label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Tell us what's on your mind..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-crimson hover:bg-crimson-dark text-cream py-4 font-bold tracking-wide rounded-xl transition-colors flex items-center justify-center gap-3 shadow-lg"
        style={{ fontFamily: "var(--font-fredoka)" }}
      >
        <Send size={18} />
        Send Message
      </button>
    </form>
  );
}
