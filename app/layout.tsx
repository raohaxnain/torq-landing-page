import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Torq - Generating Leads While You Sleep",
  description:
    "AI analytics and lead generation experts. Streamline operations, optimize processes, and boost revenue.",
  openGraph: {
    title: "Torq - Generating Leads While You Sleep",
    description:
      "AI analytics and lead generation experts. Streamline operations, optimize processes, and boost revenue.",
    images: [
      {
        url: "/torq-logo.png",
        width: 1200,
        height: 630,
        alt: "Torq Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${manrope.variable} ${inter.variable} antialiased font-Inter`}
      >
        {children}
      </body>
    </html>
  );
}