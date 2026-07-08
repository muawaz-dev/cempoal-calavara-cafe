import Link from "next/link";
import Image from "next/image";
import { Coffee, Music, Palette, Castle, MapPin, ChevronRight, ArrowRight } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <div>
      {/* ══════════════ HERO ══════════════ */}
      <section className="bg-crimson h-screen  overflow-hidden">

        <div className="min-h-screen gap-4 sm:gap-12 md:gap-20 lg:gap-0 flex flex-col justify-center xl:flex-row">

          {/* Illustration — top on mobile/tablet, left half on desktop */}
          <div className="relative w-full h-[65vw] max-h-72 sm:max-h-[22rem] md:max-h-[26rem] lg:max-h-[30rem] shrink-0
                          xl:w-1/2 xl:h-auto xl:max-h-none xl:pt-16 xl:self-stretch">
            <Image
              src="/home/hero-design.png"
              alt="Cempoal Calavera Negra Café"
              fill
              className="object-contain object-center"
              priority
            />
          </div>

          {/* Text — below image on mobile/tablet, right half on desktop */}
          <div className="w-full xl:w-1/2 xl:flex-1 flex flex-col justify-center
                          px-6 sm:px-10 lg:px-12 pt-6 pb-10 xl:pt-20 xl:pb-0">

            {/* TACOS & VIBES */}
            <h1
              className="text-5xl  sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.88] text-golden mb-5"
              style={{
                fontFamily: "var(--font-sancreek)",
                textShadow: "3px 3px 0 #5a0a0a, 6px 6px 0 #2d0404",
              }}
            >
              TACOS &amp;<br />VIBES
            </h1>

            {/* Pillars — one row on all sizes */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3"
                 style={{ fontFamily: "var(--font-fredoka)" }}>
              <span className="text-cream/70 text-xs font-medium">
                COFFEE | MUSIC | ART | CHESS
              </span>
              <span className="w-px h-5 bg-cream/30 shrink-0" />
              <span className="text-golden text-sm font-bold">
                CAFÉ | MÚSICA | ARTE | AJEDREZ
              </span>
            </div>

            {/* Address */}
            <div className="mb-7" style={{ fontFamily: "var(--font-fredoka)" }}>
              <span className="text-cream/50 text-xs font-bold">Visit us @ </span>
              <span className="text-cream text-xs font-bold uppercase tracking-wide">
                2374 Agricola St, Halifax NS
              </span>
            </div>

            {/* Menu button */}
            <Link
              href="/menu"
              className="block w-full text-center bg-cream hover:bg-parchment text-teal text-xl font-bold py-4 rounded-xl shadow-xl transition-colors"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              Menu
            </Link>
          </div>
        </div>

        <div className="h-1 bg-golden/30" />
      </section>

      {/* ══════════════ FOUR PILLARS ══════════════ */}
      <section className="bg-espresso py-10 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: Palette, label: "Art",    desc: "Local artists featured" },
            { icon: Castle,  label: "Chess",  desc: "Drop in & play" },
            { icon: Coffee,  label: "Coffee", desc: "Artisanal & traditional" },
            { icon: Music,   label: "Music",  desc: "Live & curated sets" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2 py-3">
              <div className="w-11 h-11 rounded-full bg-crimson/50 border border-golden/20 flex items-center justify-center mb-1">
                <Icon size={18} className="text-golden" />
              </div>
              <p
                className="text-golden font-bold text-base leading-none"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                {label}
              </p>
              <p className="text-cream/35 text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ ABOUT / INTERIOR ══════════════ */}
      <section className="bg-warm-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/home/cafe-interior2.jpg"
              alt="Inside Cempoal Calavera Negra Café"
              fill
              className="object-cover"
              style={{ objectPosition: "center 35%" }}
            />
            {/* Subtle vignette to frame the photo */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
          </div>

          {/* Text */}
          <div>
            <p
              className="text-crimson text-xs tracking-[0.4em] uppercase font-bold mb-4"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              The Space
            </p>
            <h2
              className="text-4xl sm:text-5xl text-espresso mb-6 leading-tight"
              style={{ fontFamily: "var(--font-sancreek)" }}
            >
              Your Second<br />Living Room
            </h2>
            <p className="text-espresso/65 text-sm leading-relaxed mb-4">
              Step through our door and into a space that feels like someone&apos;s
              very well-travelled living room. Art on every wall, couches you&apos;ll
              sink into, and coffee that makes you forget you need to leave.
            </p>
            <p className="text-espresso/45 text-sm leading-relaxed mb-10">
              Chess boards set up. Music playing softly. The smell of cinnamon
              and espresso in the air — alive, unhurried, and always welcoming.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Local Art",    desc: "Rotating exhibitions" },
                { label: "Chess Night",  desc: "Drop in & play" },
                { label: "Live Music",   desc: "Weekend sessions" },
                { label: "Open Seating", desc: "Stay as long as you like" },
              ].map(({ label, desc }) => (
                <div key={label} className="border border-golden/25 rounded-xl p-4 bg-parchment/30">
                  <p
                    className="text-espresso font-bold text-sm"
                    style={{ fontFamily: "var(--font-fredoka)" }}
                  >
                    {label}
                  </p>
                  <p className="text-espresso/45 text-xs mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════ MENU HIGHLIGHTS ══════════════ */}
      <section className="bg-parchment py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-crimson text-xs tracking-[0.35em] uppercase font-bold mb-3"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              A taste of what&apos;s inside
            </p>
            <h2
              className="text-5xl text-espresso"
              style={{ fontFamily: "var(--font-sancreek)" }}
            >
              Menu Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { name: "Café de Olla",      price: "$5.50",  tag: "Signature", desc: "Spiced with cinnamon & piloncillo" },
              { name: "Carne Asada Tacos", price: "$12.00", tag: "Fan Fave",  desc: "Grilled beef, pico de gallo, lime crema" },
              { name: "Horchata Latte",    price: "$6.00",  tag: "Unique",    desc: "Espresso over house-made horchata" },
              { name: "Loaded Fries",      price: "$9.00",  tag: "Must Try",  desc: "Queso, jalapeños, sour cream, cilantro" },
            ].map(({ name, price, tag, desc }) => (
              <div
                key={name}
                className="bg-warm-white rounded-xl overflow-hidden border border-crimson/10 hover:border-crimson/30 hover:shadow-lg transition-all group"
              >
                <div className="bg-crimson h-1.5 group-hover:h-2.5 transition-all" />
                <div className="p-5">
                  <span
                    className="bg-golden/15 text-crimson text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-fredoka)" }}
                  >
                    {tag}
                  </span>
                  <h3
                    className="font-bold text-espresso text-lg mt-4 mb-1 leading-snug"
                    style={{ fontFamily: "var(--font-fredoka)" }}
                  >
                    {name}
                  </h3>
                  <p className="text-espresso/45 text-xs mb-4 leading-relaxed">{desc}</p>
                  <p className="text-crimson font-bold text-xl" style={{ fontFamily: "var(--font-sancreek)" }}>
                    {price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson-dark text-cream px-10 py-3.5 font-bold rounded-full shadow-md transition-colors"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              View Full Menu <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

     
      {/* ══════════════ OWNER QUOTE ══════════════ */}
      <section className="bg-crimson py-20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 30px, var(--color-golden) 30px, var(--color-golden) 31px)",
          }}
        />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <p
            className="text-golden/20 text-8xl leading-none"
            style={{ fontFamily: "var(--font-sancreek)" }}
          >
            ❝
          </p>
          <p
            className="text-4xl mb-10 font-bold text-cream leading-none block tracking-wide"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Life&apos;s too short for bad coffee and empty walls.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-golden/35" />
            <p
              className="text-golden/65 text-xs tracking-[0.35em] uppercase font-bold"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              Chris, Owner
            </p>
            <div className="h-px w-10 bg-golden/35" />
          </div>
        </div>
      </section>

      {/* ══════════════ STORY SNIPPET ══════════════ */}
      {/* Two-column: portrait crop + text */}
        <div className="bg-espresso">
          <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="relative h-72 sm:h-96 lg:h-[480px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/home/cafe-interior.jpg"
                alt="Inside Cempoal Calavera Negra Café"
                fill
                className="object-cover object-center"
              />
            </div>

            <div>
              <p
                className="text-golden/55 text-[10px] tracking-[0.5em] uppercase font-bold mb-4"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                Our Story
              </p>
              <h2
                className="text-4xl md:text-5xl text-cream mb-6 leading-tight"
                style={{ fontFamily: "var(--font-sancreek)" }}
              >
                More than<br />a café
              </h2>
              <p className="text-cream/55 text-sm leading-relaxed mb-4">
                Tucked on Agricola Street in Halifax, Cempoal Calavera Negra is the kind of place you walk into as a stranger and leave as a regular. Deep red walls, local artwork, chess boards, and freshly brewed coffee — it&apos;s your neighbourhood living room.
              </p>
              <p className="text-cream/35 text-sm leading-relaxed mb-10">
                We&apos;re a gathering place for artists, thinkers, chess players, and coffee lovers. The skull on our sign isn&apos;t a warning — it&apos;s an invitation.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-golden hover:text-golden-light text-sm font-bold tracking-widest uppercase transition-colors"
                style={{ fontFamily: "var(--font-fredoka)" }}
              >
                Meet the team <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>

      {/* ══════════════ CTA ══════════════ */}
      <CtaBanner
        title="Come Find Your Table"
        subtitle="Morning ritual, afternoon chess match, or a late-night listen — there's always a seat for you."
        buttonText="Find Us — 2374 Agricola St"
        buttonHref="/contact"
        icon={<MapPin size={16} />}
      />
    </div>
  );
}
