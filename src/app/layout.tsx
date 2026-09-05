import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const anton = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Broformer: The Global Home of Men's Reformer Pilates",
  description:
    "Find men's reformer Pilates classes around the world. Broformer is the global directory and movement connecting men with studios building a stronger, more mobile community.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
