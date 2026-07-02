import Link from "next/link";
import Image from "next/image";
type Props = {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
  icon?: React.ReactNode;
};

export default function CtaBanner({ title, subtitle, buttonText, buttonHref, icon }: Props) {
  return (
    <section className="bg-crimson py-20 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 30px, var(--color-golden) 30px, var(--color-golden) 31px)",
        }}
      />
      <div className="relative z-10 max-w-xl mx-auto px-6">
        <Image
        src={"/home/logo.png"}
        alt="logo"
        height={60}
        width={60}
        className="m-auto"
        />
  
        <h2
          className="text-4xl my-4 font-bold text-cream leading-none block tracking-wide"
          style={{ fontFamily: "var(--font-fredoka)" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-cream/50 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            {subtitle}
          </p>
        )}
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 bg-cream hover:bg-parchment text-crimson font-bold px-10 py-4 rounded-full shadow-lg transition-colors tracking-wide"
          style={{ fontFamily: "var(--font-fredoka)" }}
        >
          {icon}
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
