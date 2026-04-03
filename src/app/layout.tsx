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
  title: "Ethio Beverages | Premium Ethiopian Spirits",
  description: "Ethiopia's premier luxury spirits manufacturer. Crafting exceptional gin, cognac, and signature blends from Addis Ababa.",
  keywords: ["Ethiopian spirits", "Ethiopian gin", "Ethiopian cognac", "Ethio Beverages", "luxury spirits", "Addis Ababa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🥃</text></svg>" />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#030303', color: '#fafafa', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh', overflowX: 'hidden' }}>
        <CursorGlow />
        <AgeVerification />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
