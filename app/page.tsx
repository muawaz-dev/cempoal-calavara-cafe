import Link from "next/link";
import Image from "next/image";
import { Coffee, Music, Palette, Castle, MapPin, ChevronRight, Star } from "lucide-react";

/* ── Papel picado banner ───────────────────────────────── */
function PapelPicado() {
  const colors = [
    "var(--color-golden)",
    "var(--color-cream)",
    "var(--color-teal)",
    "var(--color-golden-light)",
    "var(--color-marigold)",
    "var(--color-cream)",
    "var(--color-golden)",
    "var(--color-teal)",
    "var(--color-marigold)",
    "var(--color-cream)",
    "var(--color-golden)",
    "var(--color-golden-light)",
  ];

  return (
    <div className="absolute top-0 left-0 right-0 flex z-20 pointer-events-none">
      {colors.map((color, i) => (
        <div
          key={i}
          className="flex-1 h-14"
          style={{
            backgroundColor: color,
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
            opacity: 0.9,
          }}
        />
      ))}
    </div>
  );
}

/* ── Circular badge with arched text ──────────────────── */
function LogoBadge() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow ring */}
      <div className="absolute w-72 h-72 rounded-full bg-golden/10 border-2 border-golden/30 animate-pulse" />

      <svg
        viewBox="0 0 220 220"
        className="w-72 h-72 absolute"
        aria-hidden="true"
      >
        {/* Outer decorative ring */}
        <circle cx="110" cy="110" r="104" fill="none" stroke="var(--color-golden)" strokeWidth="2" strokeDasharray="6 4" />
        <circle cx="110" cy="110" r="96" fill="none" stroke="var(--color-golden)" strokeWidth="1" opacity="0.4" />

        {/* Arched bottom text path */}
        <path
          id="bottom-arc"
          d="M 22,110 a 88,88 0 0,0 176,0"
          fill="none"
        />
        <text className="arched-text">
          <textPath href="#bottom-arc" startOffset="50%" textAnchor="middle">
            CEMPOAL CALAVERA NEGRA ✦
          </textPath>
        </text>

        {/* Top label */}
        <path
          id="top-arc"
          d="M 22,110 a 88,88 0 0,1 176,0"
          fill="none"
        />
        <text className="arched-text" style={{ fontSize: "11px" }}>
          <textPath href="#top-arc" startOffset="50%" textAnchor="middle">
            ✦ CAFÉ ✦ HALIFAX, NS ✦
          </textPath>
        </text>
      </svg>

      {/* Inner circle */}
      <div className="w-44 h-44 rounded-full bg-crimson/80 border-4 border-golden flex flex-col items-center justify-center shadow-2xl z-10">
        <p
          className="text-golden text-xs tracking-[0.3em] uppercase font-bold mb-1"
          style={{ fontFamily: "var(--font-fredoka)" }}
        >
          CAFÉ
        </p>
        <span className="text-5xl">☠</span>
        <div className="flex gap-3 mt-2 text-xs text-golden/70 font-bold tracking-widest">
          <span>EST.</span>
          <span>2019</span>
        </div>
      </div>
    </div>
  );
}

/* ── Vertical divider ─────────────────────────────────── */
function VibeDivider() {
  return <div className="hidden lg:block w-px bg-cream/30 self-stretch mx-2" />;
}

/* ── Home page ────────────────────────────────────────── */
export default function Home() {
  return (
    <div>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-screen bg-crimson overflow-hidden flex flex-col">
        {/* <PapelPicado /> */}

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home/hero-bg.png"
            alt="Cempoal Calavera Negra Café hero"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient: transparent on the left so the image pops, darker on the right for text contrast */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.05) 0%, rgba(20,3,3,0.72) 55%, rgba(20,3,3,0.82) 100%)",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex items-center pt-14">
          <div className="max-w-6xl mx-auto px-6 w-full py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — hero background image shows through this space */}
            <div className="hidden lg:block" />

            {/* Right — Title block */}
            <div>
              {/* Big title */}
              <h1
                className="text-7xl md:text-8xl lg:text-9xl leading-none text-golden mb-6"
                style={{
                  fontFamily: "var(--font-paytone)",
                  textShadow: "4px 4px 0 #5a0a0a, 8px 8px 0 #2d0404",
                }}
              >
                TACOS &amp;<br />VIBES
              </h1>

              {/* Divider row */}
              <div className="flex items-center gap-0 mb-4">
                <div className="flex-1 h-px bg-cream/30" />
                <Star size={12} className="text-golden mx-2" fill="currentColor" />
                <div className="flex-1 h-px bg-cream/30" />
              </div>

              {/* English & Spanish vibe tags */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-cream/60 text-sm leading-loose font-medium tracking-wide">
                  COFFEE |<br />MUSIC |<br />ART |<br />CHESS
                </div>
                <VibeDivider />
                <div
                  className="text-golden text-2xl leading-snug font-bold"
                  style={{
                    fontFamily: "var(--font-paytone)",
                    textShadow: "2px 2px 0 #5a0a0a",
                  }}
                >
                  CAFÉ |<br />MÚSICA |<br />ARTE |<br />AJEDREZ
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 text-cream mb-8">
                <span
                  className="text-cream/50 text-sm font-bold tracking-wide whitespace-nowrap"
                  style={{ fontFamily: "var(--font-fredoka)" }}
                >
                  Visit us @
                </span>
                <MapPin size={14} className="text-golden mt-0.5 flex-shrink-0" />
                <span className="text-cream font-bold text-sm">
                  2374 Agricola St, Halifax, Nova Scotia
                </span>
              </div>

              {/* CTA Button */}
              <Link
                href="/menu"
                className="block w-full text-center bg-cream text-teal text-2xl font-bold py-5 rounded-xl shadow-xl hover:bg-parchment transition-colors"
                style={{ fontFamily: "var(--font-paytone)" }}
              >
                Menu
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="relative z-10 h-3 bg-golden" />
      </section>

      {/* ══════════════ VIBES STRIP ══════════════ */}
      <section className="bg-espresso py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: Coffee, en: "Coffee", es: "Café", desc: "Artisanal & traditional" },
            { icon: Music, en: "Music", es: "Música", desc: "Live & curated sets" },
            { icon: Palette, en: "Art", es: "Arte", desc: "Local artists featured" },
            { icon: Castle, en: "Chess", es: "Ajedrez", desc: "Drop in & play" },
          ].map(({ icon: Icon, en, es, desc }) => (
            <div key={en} className="flex flex-col items-center text-center gap-2 py-2">
              <div className="w-12 h-12 rounded-full bg-crimson flex items-center justify-center mb-1">
                <Icon size={22} className="text-golden" />
              </div>
              <p
                className="text-golden font-bold text-lg leading-none"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                {en}
              </p>
              <p className="text-cream/40 text-xs tracking-[0.2em] uppercase">{es}</p>
              <p className="text-cream/50 text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ MENU HIGHLIGHTS ══════════════ */}
      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-crimson text-xs tracking-[0.3em] uppercase font-bold mb-3">
              A Taste of What's Inside
            </p>
            <h2
              className="text-5xl font-bold text-espresso"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              Menu Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { name: "Café de Olla", price: "$5.50", tag: "Signature", desc: "Spiced with cinnamon & piloncillo", icon: Coffee },
              { name: "Carne Asada Tacos", price: "$12.00", tag: "Fan Fave", desc: "Grilled beef, pico de gallo, lime crema", icon: null },
              { name: "Horchata Latte", price: "$6.00", tag: "Unique", desc: "Espresso over house-made horchata", icon: null },
              { name: "Loaded Fries", price: "$9.00", tag: "Must Try", desc: "Queso, jalapeños, sour cream, cilantro", icon: null },
            ].map(({ name, price, tag, desc }) => (
              <div
                key={name}
                className="bg-white rounded-2xl overflow-hidden border-2 border-crimson/10 hover:border-crimson/40 hover:shadow-xl transition-all group"
              >
                <div className="bg-crimson h-2 group-hover:h-3 transition-all" />
                <div className="p-6">
                  <span className="bg-golden/20 text-crimson text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full">
                    {tag}
                  </span>
                  <h3
                    className="font-bold text-espresso text-xl mt-4 mb-1 leading-tight"
                    style={{ fontFamily: "var(--font-fredoka)" }}
                  >
                    {name}
                  </h3>
                  <p className="text-espresso/50 text-xs mb-4 leading-relaxed">{desc}</p>
                  <p
                    className="text-crimson font-bold text-2xl"
                    style={{ fontFamily: "var(--font-fredoka)" }}
                  >
                    {price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson-dark text-cream px-10 py-4 font-bold rounded-full shadow-lg transition-colors"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              View Full Menu
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ QUOTE BANNER ══════════════ */}
      <section className="bg-crimson py-20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, var(--color-golden) 30px, var(--color-golden) 31px)",
          }}
        />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <span className="text-golden/30 text-8xl font-bold leading-none block mb-4" style={{ fontFamily: "var(--font-fredoka)" }}>❝</span>
          <p
            className="text-3xl md:text-4xl font-bold text-cream leading-snug mb-6"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            "Life is too short for bad coffee and bland food."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-golden/50" />
            <p className="text-golden text-xs tracking-[0.3em] uppercase font-bold">Rosa, Founder</p>
            <div className="h-px w-12 bg-golden/50" />
          </div>
        </div>
      </section>

      {/* ══════════════ VISIT CTA ══════════════ */}
      <section className="bg-espresso py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-5xl mb-6">☠</div>
          <h2
            className="text-4xl md:text-5xl font-bold text-golden mb-4"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Come Find Your Table
          </h2>
          <p className="text-cream/55 text-base leading-relaxed mb-8">
            Whether it&apos;s your morning ritual or a late-night chess match —
            there&apos;s always a seat for you at Cempoal.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-golden hover:bg-golden-light text-espresso px-10 py-4 font-bold rounded-full shadow-lg transition-colors"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            <MapPin size={18} />
            Find Us — 2374 Agricola St
          </Link>
        </div>
      </section>
    </div>
  );
}
