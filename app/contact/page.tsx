import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Star, ExternalLink } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Cempoal Calavera Negra Café",
  description:
    "Find us at 2374 Agricola St, Halifax, Nova Scotia. Get in touch with Cempoal Calavera Negra Café.",
};

const hours = [
  { day: "Monday", time: "7:00 am – 8:00 pm" },
  { day: "Tuesday", time: "7:00 am – 8:00 pm" },
  { day: "Wednesday", time: "7:00 am – 8:00 pm" },
  { day: "Thursday", time: "7:00 am – 8:00 pm" },
  { day: "Friday", time: "7:00 am – 9:00 pm" },
  { day: "Saturday", time: "8:00 am – 9:00 pm" },
  { day: "Sunday", time: "9:00 am – 7:00 pm" },
];

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border-2 border-golden/20 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-full bg-golden/15 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3
            className="text-lg font-bold text-espresso mb-2"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            {title}
          </h3>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div>
      {/* ── Header ──────────────────────────────────────────── */}
      <section className="bg-crimson text-cream py-20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, var(--color-golden) 30px, var(--color-golden) 31px)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star size={14} className="text-golden fill-golden" />
            <p className="text-golden text-xs tracking-[0.35em] uppercase font-bold">
              We&apos;d Love to Hear from You
            </p>
            <Star size={14} className="text-golden fill-golden" />
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-golden mb-5 drop-shadow-lg"
            style={{ fontFamily: "var(--font-sancreek)" }}
          >
            Come Find Us
          </h1>
          <p className="text-cream/65 text-lg leading-relaxed">
            Whether you have a question, a craving, or just want to say hello —
            our door at 2374 Agricola St is always open.
          </p>
        </div>
        <div className="h-3 bg-golden absolute bottom-0 left-0 right-0" />
      </section>

      {/* ── Info + Form ─────────────────────────────────────── */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left — contact info */}
          <div className="space-y-5">
            <InfoCard
              icon={<MapPin size={20} className="text-crimson" />}
              title="Location"
            >
              <p className="text-espresso/70 text-sm leading-relaxed">
                2374 Agricola St<br />Halifax, Nova Scotia, Canada
              </p>
              <a
                href="https://maps.app.goo.gl/AhbwwSecQS4Mef4R6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-crimson hover:text-crimson-dark text-sm font-bold underline underline-offset-2 transition-colors"
              >
                Open in Google Maps
                <ExternalLink size={13} />
              </a>
            </InfoCard>

            <div className="grid grid-cols-2 gap-5">
              <InfoCard
                icon={<Phone size={20} className="text-crimson" />}
                title="Phone"
              >
                <a
                  href="tel:+19025551234"
                  className="text-crimson hover:text-crimson-dark font-bold text-base transition-colors"
                  style={{ fontFamily: "var(--font-fredoka)" }}
                >
                  (902) 555-1234
                </a>
              </InfoCard>

              <InfoCard
                icon={<Mail size={20} className="text-crimson" />}
                title="Email"
              >
                <a
                  href="mailto:hello@cempoal.ca"
                  className="text-crimson hover:text-crimson-dark font-bold text-sm transition-colors break-all"
                  style={{ fontFamily: "var(--font-fredoka)" }}
                >
                  hello@cempoal.ca
                </a>
              </InfoCard>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 border-2 border-golden/20 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-golden/15 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-crimson" />
                </div>
                <h3
                  className="text-lg font-bold text-espresso"
                  style={{ fontFamily: "var(--font-fredoka)" }}
                >
                  Hours
                </h3>
              </div>
              <div className="space-y-0">
                {hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-2.5 border-b border-golden/10 last:border-none text-sm"
                  >
                    <span className="text-espresso/70 font-medium">{day}</span>
                    <span
                      className="text-espresso font-bold"
                      style={{ fontFamily: "var(--font-fredoka)" }}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Star size={14} className="text-golden fill-golden" />
              <p className="text-golden text-xs tracking-[0.35em] uppercase font-bold">
                Drop Us a Line
              </p>
            </div>
            <h2
              className="text-4xl font-bold text-espresso mb-8"
              style={{ fontFamily: "var(--font-sancreek)" }}
            >
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Map placeholder ─────────────────────────────────── */}
      <section className="bg-espresso py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star size={14} className="text-golden fill-golden" />
            <p className="text-golden text-xs tracking-[0.35em] uppercase font-bold">
              Find Us in Halifax
            </p>
            <Star size={14} className="text-golden fill-golden" />
          </div>
          <h2
            className="text-3xl font-bold text-cream mb-8"
            style={{ fontFamily: "var(--font-sancreek)" }}
          >
            2374 Agricola St — Easy to Find
          </h2>
          <div className="bg-crimson/20 border-2 border-golden/20 rounded-3xl h-64 flex flex-col items-center justify-center gap-5">
            <MapPin size={40} className="text-golden" />
            <p className="text-cream/60 text-sm font-medium">
              Cempoal Calavera Negra Café · 2374 Agricola St · Halifax, NS
            </p>
            <a
              href="https://maps.app.goo.gl/AhbwwSecQS4Mef4R6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-golden hover:bg-golden-light text-espresso px-7 py-3 font-bold rounded-full shadow-lg transition-colors"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              <ExternalLink size={16} />
              Open Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
