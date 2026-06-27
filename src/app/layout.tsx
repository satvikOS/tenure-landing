import type { Metadata, Viewport } from "next";
import { generalSans, fraunces, plexMono } from "@/lib/fonts";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Grain } from "@/components/visuals/Grain";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: site.founders.map((f) => ({ name: f.name })),
  keywords: [
    "institutional memory",
    "knowledge transfer",
    "leadership transition",
    "student organizations",
    "succession",
    "board handoff",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og.png"],
  },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: "#0f1115",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${generalSans.variable} ${fraunces.variable} ${plexMono.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-ink text-parchment">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Grain />
      </body>
    </html>
  );
}
