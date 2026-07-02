import type { Metadata } from "next";
import { Fredoka, Nunito, Paytone_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const paytoneOne = Paytone_One({
  variable: "--font-paytone",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Cempoal Calavera Negra Café",
  description:
    "Coffee · Music · Art · Chess — A bold Mexican-inspired café at 2374 Agricola St, Halifax, Nova Scotia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} ${paytoneOne.variable}`}>
      <body className="min-h-screen flex flex-col bg-warm-white text-espresso">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
