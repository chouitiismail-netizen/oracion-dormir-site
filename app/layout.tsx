import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://REPLACE_AFTER_VERCEL.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Oraciones para dormir en paz - Fe y calma nocturna",
  description: "Oraciones y reflexiones católicas originales para terminar el día con calma, soltar preocupaciones y descansar con fe.",
  keywords: ["oraciones para dormir", "oraciones católicas", "paz nocturna", "reflexiones espirituales"],
  alternates: {
    canonical: baseUrl,
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Oraciones para dormir en paz",
    description: "Oraciones y reflexiones católicas para terminar el día con calma y fe.",
    url: baseUrl,
    siteName: "Oraciones para dormir en paz",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Oraciones para dormir en paz",
    description: "Oraciones y reflexiones católicas para terminar el día con calma y fe.",
  },
  other: {
    "theme-color": "#d17b27",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${fraunces.variable} ${inter.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
