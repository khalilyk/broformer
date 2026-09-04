"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Find A Class", href: "#find-a-class" },
  { label: "Why Broformer", href: "#why-broformer" },
  { label: "For Studios", href: "#for-studios" },
  { label: "The Movement", href: "#the-movement" },
  { label: "Journal", href: "#journal" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.08)]"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      }`}
    >
      <div className="w-full bg-red py-1.5 text-center">
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white md:text-[11px]">
          The Global Home of Men&apos;s Reformer Pilates
        </span>
      </div>

      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex flex-col leading-none">
          <Logo className="text-2xl md:text-3xl" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="underline-hover text-xs font-semibold uppercase tracking-[0.12em] text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Change language"
          className="hidden cursor-pointer text-white/80 transition-all duration-200 hover:rotate-12 hover:text-red lg:block"
        >
          <Globe size={19} strokeWidth={1.75} />
        </button>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="cursor-pointer text-white lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-ink lg:hidden"
          >
            <nav className="container-x flex flex-col gap-1 pb-6 pt-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white/90 transition-colors hover:text-red"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
