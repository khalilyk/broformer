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

const TITLE = "Broformer: The Global Home of Men's Reformer Pilates";
const DESCRIPTION =
  "Find men's reformer Pilates classes around the world. Broformer is the global directory and movement connecting men with studios building a stronger, more mobile community.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.broformer.com"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Broformer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
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
