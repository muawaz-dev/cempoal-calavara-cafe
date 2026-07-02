import type { Metadata } from "next";
import { Fredoka, Nunito, Sancreek } from "next/font/google";
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

const sancreek = Sancreek({
  variable: "--font-sancreek",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Cempoal Calavera Negra Café",
  description:
    "Art · Chess · Coffee · Music — A cozy neighbourhood café at 2374 Agricola St, Halifax, Nova Scotia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} ${sancreek.variable}`}>
      <body className="min-h-screen flex flex-col bg-warm-white text-espresso">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
