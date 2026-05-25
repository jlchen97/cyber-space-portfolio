import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Single source of truth for the deployed origin. Override at deploy time
// via NEXT_PUBLIC_SITE_URL — the placeholder keeps types valid until then.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://TODO_SITE_URL.com";

const SITE_DESCRIPTION =
  "Mechanical & Robotics Engineer building reliable hardware systems for industrial-scale problems. UW alum, based in Seattle.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jian Chen | Mechanical & Robotics Engineer",
    template: "%s | Jian Chen",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Jian Chen",
  authors: [{ name: "Jian Chen" }],
  creator: "Jian Chen",
  alternates: { canonical: "/" },
  // og:image / twitter:image are emitted automatically by app/opengraph-image.tsx.
  openGraph: {
    type: "website",
    siteName: "Jian Chen",
    title: "Jian Chen | Mechanical & Robotics Engineer",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jian Chen | Mechanical & Robotics Engineer",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-surface text-on-surface overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
