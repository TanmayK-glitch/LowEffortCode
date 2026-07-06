import type { Metadata } from "next";
import { Fraunces, Archivo } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal"],
  variable: "--font-display-loaded",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voidform Studio — Digital Creative Studio",
  description:
    "Voidform is a full-service creative studio crafting cinematic digital experiences. We shape brands that command attention.",
  openGraph: {
    title: "Voidform Studio — Digital Creative Studio",
    description:
      "Cinematic digital experiences. Brands that command attention.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable}`}>
      <body style={{ fontFamily: "var(--font-body)" }}>{children}</body>
    </html>
  );
}
