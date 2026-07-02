import type { Metadata } from "next";
import Image from "next/image";
import { Star, Heart, Users, Leaf } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Our Story | Cempoal Calavera Negra Café",
  description:
    "Meet the crew behind Cempoal Calavera Negra Café and discover the story of how we brought Mexico to Halifax.",
};


const values = [
  {
    icon: Leaf,
    title: "Rooted in Tradition",
    desc: "Every recipe honours generations of Mexican culinary history. We brew that heritage into every single cup.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "From local artists on our walls to chess nights in our corner — we built a gathering place, not just a café.",
  },
  {
    icon: Heart,
    title: "Quality Always",
    desc: "Ethically sourced small-batch beans, the freshest local ingredients, and zero shortcuts. You deserve the best.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center gap-3 mb-4">
      <Star size={14} className="text-golden fill-golden" />
      <p className="text-golden text-xs tracking-[0.35em] uppercase font-bold">
        {children}
      </p>
      <Star size={14} className="text-golden fill-golden" />
    </div>
  );
}

export default function About() {
  return (
    <div>
      {/* ── Header ──────────────────────────────────────────── */}
      <section className="bg-crimson text-cream py-24 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, var(--color-golden) 30px, var(--color-golden) 31px)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <SectionLabel>Our Story</SectionLabel>
          <h1
            className="text-5xl md:text-7xl font-bold text-golden mb-6 leading-tight drop-shadow-lg"
            style={{ fontFamily: "var(--font-sancreek)" }}
          >
            About Us
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            Cempoal Calavera Negra isn&apos;t just a café — it&apos;s a love letter to
            Mexico, written in espresso and tacos, in the heart of Halifax.
          </p>
        </div>
        <div className="h-3 bg-golden absolute bottom-0 left-0 right-0" />
      </section>

      {/* ── Story ───────────────────────────────────────────── */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>How It All Started</SectionLabel>
            <h2
              className="text-4xl font-bold text-espresso mb-8"
              style={{ fontFamily: "var(--font-sancreek)" }}
            >
              A Dream Brewed in Two Worlds
            </h2>
            <div className="space-y-5 text-espresso/70 leading-relaxed text-sm">
              <p>
                <strong className="text-espresso">Cempoal</strong> comes from Cempoala — an
                ancient Totonac city in Veracruz, Mexico, where the aroma of roasted cacao
                mingled with the sea breeze for centuries. A name that carries deep roots and
                deep flavours.
              </p>
              <p>
                <strong className="text-espresso">Calavera Negra</strong> — the Black Skull
                — is our nod to Día de los Muertos: a celebration of life, memory, and the
                enduring bonds between the living and the loved. We wear it as a reminder
                that every coffee shared is a small act of joy.
              </p>
              <p>
                Rosa Hernández brought this vision from Oaxaca to Halifax in 2019, building
                a neighbourhood landmark where Mexican culture could feel at home — and where
                Haligonians could discover something bold, warm, and new.
              </p>
            </div>
          </div>

          {/* Skull sign photo + stats */}
          <div className="space-y-5">
            <div className="relative h-104 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/home/cafe-painting.png"
                alt="Cempoal Calavera Negra sign"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "Est. 2019", label: "Born on Agricola St" },
                { num: "5,000+",   label: "Cups weekly" },
                { num: "100%",     label: "Ethical beans" },
                { num: "♾",        label: "Halifax love" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="bg-golden/10 border-2 border-golden/30 rounded-2xl p-5 text-center"
                >
                  <p
                    className="text-xl font-bold text-crimson"
                    style={{ fontFamily: "var(--font-fredoka)" }}
                  >
                    {num}
                  </p>
                  <p className="text-espresso/50 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────── */}
      <section className="py-20 bg-espresso">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>What Drives Us</SectionLabel>
            <h2
              className="text-4xl font-bold text-golden"
              style={{ fontFamily: "var(--font-sancreek)" }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center px-6 py-8 rounded-2xl border border-golden/20 bg-white/5">
                <div className="w-14 h-14 rounded-full bg-crimson flex items-center justify-center mx-auto mb-5">
                  <Icon size={26} className="text-golden" />
                </div>
                <h3
                  className="text-xl font-bold text-golden mb-3"
                  style={{ fontFamily: "var(--font-fredoka)" }}
                >
                  {title}
                </h3>
                <p className="text-cream/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Come Be Part of the Story"
        subtitle="We're always looking for passionate people who love great coffee and community. Come visit — maybe you'll stay."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}
