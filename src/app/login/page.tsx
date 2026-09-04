"use client";

import Link from "next/link";
import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <main>
      <PageBanner eyebrow="Account" title="Log in to Broformer." />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 md:p-8">
            <div className="flex rounded-full bg-cream p-1">
              <button
                onClick={() => setMode("login")}
                className={`flex-1 cursor-pointer rounded-full py-2.5 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
                  mode === "login" ? "bg-ink text-white" : "text-ink/50"
                }`}
              >
                Log In
              </button>
              <button
                onClick={() => setMode("signup")}
                className={`flex-1 cursor-pointer rounded-full py-2.5 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
                  mode === "signup" ? "bg-ink text-white" : "text-ink/50"
                }`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
              {mode === "signup" && (
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                    Full name
                  </span>
                  <input
                    required
                    type="text"
                    className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
                  />
                </label>
              )}
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                  Email
                </span>
                <input
                  required
                  type="email"
                  className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                  Password
                </span>
                <input
                  required
                  type="password"
                  className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
                />
              </label>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-full bg-red px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-ink active:scale-95"
              >
                {mode === "login" ? "Log In" : "Create Account"}
              </button>
            </form>

            <p className="mt-5 text-center text-xs text-ink/50">
              Studio owner?{" "}
              <Link href="/list-your-studio" className="font-bold text-red">
                List your studio
              </Link>{" "}
              instead.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
