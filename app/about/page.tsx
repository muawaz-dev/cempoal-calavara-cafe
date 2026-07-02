import type { Metadata } from "next";
import { Star, Heart, Users, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story | Cempoal Calavera Negra Café",
  description:
    "Meet the crew behind Cempoal Calavera Negra Café and discover the story of how we brought Mexico to Halifax.",
};

const team = [
  {
    name: "Rosa Hernández",
    role: "Founder & Head Barista",
    origin: "Oaxaca, Mexico",
    bio: "Rosa grew up in Oaxaca surrounded by her grandmother's café de olla. She moved to Halifax in 2015 with a dream to open a space where her culture could breathe. In 2019, after countless late-night batches of spiced coffee, Cempoal was born.",
    emoji: "🌺",
    bg: "bg-crimson",
  },
  {
    name: "Miguel Torres",
    role: "Head Chef",
    origin: "Mexico City, Mexico",
    bio: "Trained in Mexico City, tested by years in street food stalls, Miguel brings that same fire into our café kitchen. His tacos have been called 'life-changing' by more than a few Haligonians.",
    emoji: "🌮",
    bg: "bg-teal",
  },
  {
    name: "Jade MacKenzie",
    role: "Café Manager",
    origin: "Halifax, Nova Scotia",
    bio: "A Halifax native who spent a year teaching English in Guadalajara. She came back with a love for Mexican culture and a mission to bridge two worlds — keeping the whole ship running with warmth and a contagious smile.",
    emoji: "☕",
    bg: "bg-marigold",
  },
  {
    name: "Tomás Reyes",
    role: "Barista & Latte Artist",
    origin: "Guadalajara, Mexico",
    bio: "Tomás treats every espresso like a canvas. Three years of latte art competitions across Canada. Ask him nicely and he'll put a calavera right in your foam.",
    emoji: "🎨",
    bg: "bg-crimson",
  },
  {
    name: "Lily Chen",
    role: "Weekend Baker",
    origin: "Halifax, Nova Scotia",
    bio: "Chinese pastry background, totally obsessed with pan dulce and churros. Her weekend baking sessions fill the whole block with cinnamon. She makes tradition feel like it was invented just for you.",
    emoji: "🍞",
    bg: "bg-teal",
  },
];

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
    <div className="flex items-center gap-3 mb-4">
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
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Born from Tradition,<br />Brewed with Love
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
              style={{ fontFamily: "var(--font-fredoka)" }}
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

          {/* Stats box */}
          <div className="space-y-5">
            <div className="bg-crimson rounded-3xl p-10 text-center text-cream shadow-xl">
              <span className="text-5xl block mb-3">☠</span>
              <h3
                className="text-3xl font-bold text-golden mb-2"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                Est. 2019
              </h3>
              <p className="text-cream/60 text-sm">
                Five years of coffee, community & calaveras in Halifax, NS.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "5,000+", label: "Cups weekly" },
                { num: "3", label: "Mexican regions" },
                { num: "100%", label: "Ethical beans" },
                { num: "♾", label: "Halifax love" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="bg-golden/10 border-2 border-golden/30 rounded-2xl p-5 text-center"
                >
                  <p
                    className="text-2xl font-bold text-crimson"
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
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center px-4">
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

      {/* ── Team ────────────────────────────────────────────── */}
      <section className="py-24 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>The Humans Behind the Magic</SectionLabel>
            <h2
              className="text-5xl font-bold text-espresso"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              Meet the Crew
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map(({ name, role, origin, bio, emoji, bg }) => (
              <div
                key={name}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border-2 border-golden/10"
              >
                {/* Coloured header */}
                <div
                  className={`${bg} h-24 flex items-end justify-between px-6 pb-4`}
                >
                  <span className="text-5xl">{emoji}</span>
                  <span className="text-4xl text-cream/20 font-bold" style={{ fontFamily: "var(--font-fredoka)" }}>☠</span>
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-espresso"
                    style={{ fontFamily: "var(--font-fredoka)" }}
                  >
                    {name}
                  </h3>
                  <p className="text-crimson text-xs font-bold tracking-wide uppercase mt-0.5">
                    {role}
                  </p>
                  <p className="text-espresso/40 text-xs mt-1 flex items-center gap-1">
                    <span>📍</span> {origin}
                  </p>
                  <p className="text-espresso/65 text-sm leading-relaxed mt-4">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="bg-crimson py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-golden mb-5"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Come Be Part of the Story
          </h2>
          <p className="text-cream/70 leading-relaxed mb-8">
            We&apos;re always looking for passionate people who love great coffee and
            community. Come visit — maybe you&apos;ll stay.
          </p>
          <a
            href="mailto:hello@cempoal.ca"
            className="inline-block bg-golden hover:bg-golden-light text-espresso px-10 py-4 font-bold rounded-full shadow-lg transition-colors"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
