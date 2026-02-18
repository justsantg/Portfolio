import type { Metadata, Viewport } from "next";
import { UnifrakturMaguntia } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const unifraktur = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unifraktur",
});

export const metadata: Metadata = {
  title: "Portfolio | React & TypeScript Developer",
  description:
    "Professional portfolio showcasing React, TypeScript, and modern web development expertise.",
};

export const viewport: Viewport = {
  themeColor: "#141414",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={unifraktur.variable}>
      <body className="font-sans antialiased noise-overlay">
        <I18nProvider>
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
