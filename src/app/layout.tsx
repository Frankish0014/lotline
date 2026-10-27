import type { Metadata } from "next";
import { Geist, Geist_Mono, Marcellus } from "next/font/google";
import { brand } from "@/data/brand";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Flared serif close to the Lotline wordmark, used for the mark on product prints. */
const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.descriptor} · ${brand.status}`,
  description: `${brand.campaign} ${brand.hero.body}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${marcellus.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
