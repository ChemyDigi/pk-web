import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "PK Web | Modern Web Applications & Digital Services",
  description: "Crafting high-performance digital solutions, modern web platforms, and tailored services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <main className="flex-1 pt-24 sm:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
