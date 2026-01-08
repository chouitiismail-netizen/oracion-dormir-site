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
  title: "Oraciones para la ansiedad - Calma tu mente con fe",
  description: "Oraciones y reflexiones originales para calmar la mente, soltar preocupaciones y descansar con fe.",
  keywords: ["oraciones para la ansiedad", "oraciones católicas", "calmar ansiedad", "paz interior", "reflexiones espirituales"],
  openGraph: {
    title: "Oraciones para la ansiedad",
    description: "Oraciones y reflexiones originales para calmar la mente, soltar preocupaciones y descansar con fe.",
    url: baseUrl,
    siteName: "Oraciones para la ansiedad",
    locale: "es_ES",
    type: "website",
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
