import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HeroBuildFit | Jordan Pickard Coaching",
  description: "Unleash your hero physique with Jordan Pickard. NPC Competitor and NASM CPT/NC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} dark antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-bg-dark text-white selection:bg-brand-neon selection:text-white">
        {children}
      </body>
    </html>
  );
}

