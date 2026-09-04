"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { useRef } from "react";

export default function GlowLink({
  children,
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <a ref={ref} onMouseMove={handleMove} className={`glow-link ${className}`} {...props}>
      {children}
    </a>
  );
}
