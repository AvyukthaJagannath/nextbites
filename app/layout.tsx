import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites · Quick recipes you'll actually cook",
  description: "A tiny recipe app built with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-900">
        <header className="border-b bg-white">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight">
              🍽️ NextBites
            </Link>
            <Link href="/" className="text-sm text-stone-600 hover:text-stone-900">
              All Recipes
            </Link>
          </nav>
        </header>
        <div className="max-w-4xl mx-auto px-6 py-8">{children}</div>
      </body>
    </html>
  );
}