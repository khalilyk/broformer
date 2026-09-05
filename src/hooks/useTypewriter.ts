"use client";

import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  {
    typingSpeed = 80,
    deletingSpeed = 40,
    pause = 1500,
    cursor = true,
  }: {
    typingSpeed?: number;
    deletingSpeed?: number;
    pause?: number;
    cursor?: boolean;
  } = {}
) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (!cursor) return;
    const blinkTimer = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkTimer);
  }, [cursor]);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && subIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 0);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  const current = words.length ? words[index % words.length] : "";
  return current.slice(0, subIndex) + (blink ? "|" : "");
}
