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
      <div className="container-x relative flex flex-col items-center py-3 md:py-4">
        <a href="#top" className="flex flex-col items-center text-center leading-none">
          <Logo className="text-2xl md:text-3xl" />
          <span className="hidden text-[9px] font-medium uppercase tracking-[0.18em] text-white/70 md:block">
            The Global Home of Men&apos;s Reformer Pilates
          </span>
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-white lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div className="mt-3 hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8">
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

          <div className="h-4 w-px bg-white/15" />

          <div className="flex items-center gap-5">
            <button
              aria-label="Change language"
              className="cursor-pointer text-white/80 transition-all duration-200 hover:rotate-12 hover:text-red"
            >
              <Globe size={19} strokeWidth={1.75} />
            </button>
            <a
              href="#list-your-studio"
              className="group relative overflow-hidden rounded-full border border-white/70 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:border-red"
            >
              <span className="absolute inset-0 -translate-x-full bg-red transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="relative">List Your Studio</span>
            </a>
          </div>
        </div>
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
              <a
                href="#list-your-studio"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-red px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.1em] text-white transition-transform active:scale-95"
              >
                List Your Studio
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
