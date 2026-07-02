import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Music, Palette, Coffee, Castle } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

const vibes = [
  { icon: Coffee, label: "Coffee" },
  { icon: Music, label: "Music" },
  { icon: Palette, label: "Art" },
  { icon: Castle, label: "Chess" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      {/* Vibe strip */}
      <div className="bg-crimson border-t-4 border-golden py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8">
          {vibes.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-cream font-bold tracking-widest text-xs uppercase">
              <Icon size={16} className="text-golden" />
              <span style={{ fontFamily: "var(--font-fredoka)" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p
            className="text-3xl font-bold text-golden mb-1"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Cempoal
          </p>
          <p className="text-golden/60 text-xs tracking-[0.3em] uppercase mb-5">
            Calavera Negra Café
          </p>
          <p className="text-cream/55 text-sm leading-relaxed">
            A cozy neighbourhood café in the heart of Halifax. Coffee, art,
            chess & music — come as you are, stay as long as you like.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3
            className="text-golden font-bold mb-5 text-lg"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Explore
          </h3>
          <ul className="space-y-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-cream/60 hover:text-golden text-sm transition-colors font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="text-golden font-bold mb-5 text-lg"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Find Us
          </h3>
          <ul className="space-y-4 text-sm text-cream/60">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-golden mt-0.5 shrink-0" />
              <span>2374 Agricola St,<br />Halifax, Nova Scotia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-golden shrink-0" />
              <a href="tel:+19025551234" className="hover:text-golden transition-colors">
                (902) 555-1234
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-golden shrink-0" />
              <a href="mailto:hello@cempoal.ca" className="hover:text-golden transition-colors">
                hello@cempoal.ca
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} className="text-golden mt-0.5 shrink-0" />
              <span>Mon–Fri 7am–8pm<br />Sat–Sun 8am–9pm</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-cream/30 text-xs">
          <p>© 2025 Cempoal Calavera Negra Café — Halifax, NS</p>
          <p
            className="text-golden/40 font-bold"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            ☠ Hecho con amor ☠
          </p>
        </div>
      </div>
    </footer>
  );
}
