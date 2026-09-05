"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <Analytics />
      <Header />
      {children}
      <Footer />
    </>
  );
}
