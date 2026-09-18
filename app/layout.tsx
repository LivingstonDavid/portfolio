import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-display", weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "David Livingston - Full-Stack Engineer",
  description:
    "Full-stack engineer building AI workflow automation for support teams. 5+ years in production systems: Angular, React, Next.js, Node.js, TypeScript, GraphQL, AWS.",
  openGraph: {
    title: "David Livingston - Full-Stack Engineer",
    description:
      "I build AI workflows that shrink support queues. 5+ years in production systems across 40+ brands.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Livingston - Full-Stack Engineer",
    description: "I build AI workflows that shrink support queues.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
