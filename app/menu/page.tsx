import type { Metadata } from "next";
import { Coffee, Flame, Star } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Menu | Cempoal Calavera Negra Café",
  description:
    "Explore our full menu — artisanal coffees, authentic tacos, loaded fries, churros, and more at Cempoal in Halifax.",
};

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  tag?: string;
  hot?: boolean;
};

const coffee: MenuItem[] = [
  { name: "Espresso", desc: "A single or double shot — bold, rich, and balanced.", price: "$3.50" },
  { name: "Americano", desc: "Espresso pulled long with hot water. Clean and full-bodied.", price: "$4.00" },
  { name: "Cappuccino", desc: "Equal parts espresso, steamed milk, and silky microfoam.", price: "$5.00" },
  { name: "Latte", desc: "Espresso with steamed milk and a thin layer of foam. Classic and smooth.", price: "$5.50" },
  { name: "Cortado", desc: "Equal parts espresso and warm milk — for the purists.", price: "$4.50" },
  { name: "Cold Brew", desc: "Steeped 18 hours. Smooth, low-acid, dangerously drinkable.", price: "$5.50" },
  {
    name: "Café de Olla",
    desc: "Traditional Mexican coffee brewed with cinnamon stick, piloncillo, and a hint of clove.",
    price: "$5.50",
    tag: "Signature",
    hot: true,
  },
  {
    name: "Horchata Latte",
    desc: "Espresso poured over house-made rice horchata, finished with oat milk foam.",
    price: "$6.00",
    tag: "House Specialty",
  },
  { name: "Oat Milk Mocha", desc: "Espresso, dark chocolate sauce, and steamed oat milk. Rich and comforting.", price: "$6.00" },
];

const drinks: MenuItem[] = [
  { name: "Chai Latte", desc: "Spiced black tea concentrate with steamed oat or whole milk.", price: "$5.00" },
  { name: "Matcha Latte", desc: "Ceremonial-grade matcha whisked with your choice of milk.", price: "$5.50" },
  {
    name: "Mexican Hot Chocolate",
    desc: "Dark chocolate melted into steamed milk, finished with a pinch of cayenne.",
    price: "$4.50",
    tag: "House Specialty",
    hot: true,
  },
  { name: "Agua Fresca", desc: "Jamaica, Tamarind, or Horchata — made fresh every morning.", price: "$4.50" },
  { name: "Fresh Lemonade", desc: "Hand-squeezed and lightly sweetened with piloncillo syrup.", price: "$4.00" },
  { name: "Sparkling Water", desc: "San Pellegrino, served chilled.", price: "$3.00" },
];

const tacos: MenuItem[] = [
  {
    name: "Carne Asada",
    desc: "Grilled marinated beef, pico de gallo, charred jalapeños, lime crema — warm corn tortillas. Pair.",
    price: "$12.00",
    tag: "Fan Fave",
    hot: true,
  },
  { name: "Pollo Asado", desc: "Citrus-marinated chicken, pickled red onion, avocado crema, cilantro. Pair.", price: "$11.00" },
  {
    name: "Al Pastor",
    desc: "Spiced pork shoulder, pineapple salsa, white onion, cilantro, salsa roja. Pair.",
    price: "$12.00",
    tag: "Chef's Pick",
    hot: true,
  },
  { name: "Fish Tacos", desc: "Beer-battered cod, shredded cabbage, chipotle aioli, fresh lime. Pair.", price: "$13.00" },
  { name: "Veggie Black Bean", desc: "Spiced black beans, roasted peppers, guacamole, cotija cheese. Pair.", price: "$10.00" },
];

const fries: MenuItem[] = [
  { name: "Classic Fries", desc: "Thin-cut golden fries with sea salt and house smoked paprika seasoning.", price: "$6.00" },
  {
    name: "Loaded Fries",
    desc: "Crispy fries with warm queso, pickled jalapeños, sour cream, and fresh cilantro.",
    price: "$9.00",
    tag: "Must Try",
    hot: true,
  },
  { name: "Spicy Fries", desc: "Classic fries in our chili-lime seasoning, served with sriracha aioli.", price: "$7.00", hot: true },
  { name: "Truffle Fries", desc: "Truffle oil, parmesan, and rosemary. Fancy done right.", price: "$10.00" },
];

const snacks: MenuItem[] = [
  {
    name: "Churros",
    desc: "Three golden churros dusted in cinnamon sugar, with a dark chocolate dipping sauce.",
    price: "$7.00",
    tag: "Crowd Fave",
  },
  { name: "Pan Dulce", desc: "Rotating selection of Mexican sweet breads baked in-house every morning.", price: "$3.50" },
  { name: "Guacamole & Chips", desc: "Freshly made guacamole with chunky tomato salsa and house-fried chips.", price: "$8.00" },
  { name: "Avocado Toast", desc: "Sourdough with smashed avocado, cotija, chili flakes, and lime.", price: "$9.00" },
  { name: "Elote Cup", desc: "Mexican street corn: kernels in mayo, cotija, chili powder, lime.", price: "$6.50" },
];

function MenuSection({
  icon,
  title,
  subtitle,
  items,
  accent = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: MenuItem[];
  accent?: boolean;
}) {
  return (
    <div className={accent ? "bg-espresso rounded-3xl p-8 md:p-10" : ""}>
      {/* Section header */}
      <div className="flex items-start gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-golden flex items-center justify-center shrink-0 shadow-md">
          {icon}
        </div>
        <div>
          <h2
            className={`text-3xl font-bold ${accent ? "text-golden" : "text-espresso"}`}
            style={{ fontFamily: "var(--font-sancreek)" }}
          >
            {title}
          </h2>
          <p className={`text-sm mt-0.5 ${accent ? "text-cream/50" : "text-espresso/50"}`}>{subtitle}</p>
        </div>
      </div>

      <div className="divide-y divide-crimson/10">
        {items.map((item) => (
          <div key={item.name} className="flex items-start justify-between gap-4 py-5 group">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3
                  className={`font-bold text-base group-hover:text-crimson transition-colors ${accent ? "text-cream" : "text-espresso"}`}
                  style={{ fontFamily: "var(--font-fredoka)" }}
                >
                  {item.name}
                </h3>
                {item.hot && (
                  <Flame size={13} className="text-marigold shrink-0" fill="currentColor" />
                )}
                {item.tag && (
                  <span className="bg-golden/20 text-crimson text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full whitespace-nowrap">
                    {item.tag}
                  </span>
                )}
              </div>
              <p className={`text-sm leading-relaxed ${accent ? "text-cream/50" : "text-espresso/55"}`}>
                {item.desc}
              </p>
            </div>
            <span
              className="text-golden font-bold text-lg whitespace-nowrap shrink-0"
              style={{ fontFamily: "var(--font-fredoka)" }}
            >
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <div>
      {/* ── Header ──────────────────────────────────────────── */}
      <section className="bg-crimson text-cream py-20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 30px, var(--color-golden) 30px, var(--color-golden) 31px)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star size={14} className="text-golden fill-golden" />
            <p className="text-golden text-xs tracking-[0.35em] uppercase font-bold">
              Cempoal Calavera Negra
            </p>
            <Star size={14} className="text-golden fill-golden" />
          </div>
          <h1
            className="text-6xl md:text-7xl font-bold text-golden mb-5 drop-shadow-lg"
            style={{ fontFamily: "var(--font-sancreek)" }}
          >
            Our Menu
          </h1>
          <p className="text-cream/65 text-lg leading-relaxed">
            Every item crafted fresh — from traditional Mexican recipes to modern café
            favourites. Made with love, every day.
          </p>
        </div>
        <div className="h-3 bg-golden absolute bottom-0 left-0 right-0" />
      </section>

      {/* ── Menu Content ────────────────────────────────────── */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          <MenuSection
            icon={<Coffee size={22} className="text-espresso" />}
            title="Coffee"
            subtitle="Ethically sourced, small-batch roasted. Hot, iced, or however you need it."
            items={coffee}
          />

          <MenuSection
            icon={<span className="text-espresso text-lg font-bold" style={{ fontFamily: "var(--font-fredoka)" }}>🥤</span>}
            title="Other Drinks"
            subtitle="Teas, refreshers, and traditional Mexican agua frescas made fresh daily."
            items={drinks}
          />

          {/* Tacos — accent dark background */}
          <MenuSection
            icon={<span className="text-espresso text-lg">🌮</span>}
            title="Tacos"
            subtitle="Served as pairs on warm corn tortillas. Add a third taco for $5.00."
            items={tacos}
            accent
          />

          <MenuSection
            icon={<span className="text-espresso text-lg">🍟</span>}
            title="French Fries"
            subtitle="Crispy, golden, endlessly satisfying. Pairs perfectly with any coffee."
            items={fries}
          />

          <MenuSection
            icon={<span className="text-espresso text-lg">🫔</span>}
            title="Snacks & Sides"
            subtitle="Little bites with big personality. Great solo or alongside a coffee."
            items={snacks}
          />
        </div>
      </section>

      {/* ── Disclaimer ──────────────────────────────────────── */}
      <section className="bg-parchment py-10 text-center border-t-2 border-golden/20">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-espresso/45 text-xs leading-relaxed">
            Menu and prices subject to change. Allergen info available on request.
            We love accommodating dietary needs — just ask your server.
          </p>
          <p className="text-espresso/30 text-[10px] mt-2 tracking-widest uppercase">
            ✦ All prices in CAD · Tax not included ✦
          </p>
        </div>
      </section>

      <CtaBanner
        title="Ready to Visit?"
        subtitle="Come see us at 2374 Agricola St — we can't wait to serve you."
        buttonText="Find Us"
        buttonHref="/contact"
      />
    </div>
  );
}
