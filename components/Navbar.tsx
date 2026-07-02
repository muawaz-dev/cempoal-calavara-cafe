"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Coffee } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-crimson sticky top-0 z-50 shadow-lg border-b-4 border-golden">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
            <Image
            src={"/home/logo2.jpg"}
            alt="Logo"
            height={160}
            width={160}
            />

            
          <div>
            {/* <span
              className="text-xl font-bold text-cream leading-none block tracking-wide"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              Cempoal
            </span>
            <span className="text-golden text-[9px] tracking-[0.3em] uppercase font-bold">
              Calavera Negra
            </span> */}
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-bold tracking-wide transition-colors hover:text-golden ${
                pathname === href
                  ? "text-golden border-b-2 border-golden pb-0.5"
                  : "text-cream"
              }`}
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/menu"
            className="bg-golden hover:bg-golden-light text-espresso px-5 py-2 text-sm font-bold rounded-full shadow-md transition-colors"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            Order Now ↗
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-cream p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-crimson-dark border-t-2 border-golden/30 px-6 py-5 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-base font-bold tracking-wide py-2 border-b border-golden/20 transition-colors hover:text-golden ${
                pathname === href ? "text-golden" : "text-cream"
              }`}
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="bg-golden text-espresso py-3 text-center font-bold rounded-full mt-2"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            See Full Menu
          </Link>
        </div>
      )}
    </nav>
  );
}
