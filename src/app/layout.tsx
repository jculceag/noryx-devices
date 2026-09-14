import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { GrainOverlay } from "@/components/visuals/GrainOverlay";
import { Analytics } from "@/lib/analytics";
import { getSiteUrl } from "@/lib/env";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "NORYX Devices | Ecossistema Global de Dispositivos Móveis",
  description:
    "A NORYX Devices está construindo um ecossistema internacional de sourcing, processamento técnico, controle de qualidade, rastreabilidade digital e distribuição B2B de dispositivos móveis.",
  icons: {
    icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/brand/favicon.svg",
    apple: "/brand/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-titanium antialiased">
        <GrainOverlay />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
