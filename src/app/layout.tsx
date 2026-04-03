import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AgeVerification from "@/components/AgeVerification";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "AETHER Spirits | Luxury Artisan Spirits",
  description: "Discover the essence of luxury with AETHER Spirits. Premium gin, cognac, and signature blends crafted for the discerning connoisseur.",
  keywords: ["luxury spirits", "premium gin", "cognac", "artisan spirits", "luxury alcohol"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏆</text></svg>" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} min-h-full bg-[#030303] text-white antialiased`}>
        <CursorGlow />
        <AgeVerification />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
