"use client";

import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export default function LoginPage() {
  return (
    <main>
      <PageBanner eyebrow="Studio Account" title="Log in to Broformer." />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 md:p-8">
            <h1 className="font-display text-2xl uppercase text-ink">
              Welcome back.
            </h1>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
              Studio accounts only. Log in to manage your listing, or list
              your studio for the first time.
            </p>

            <div className="mt-6 flex rounded-full bg-cream p-1">
              <span className="flex-1 rounded-full bg-ink py-2.5 text-center text-xs font-semibold uppercase tracking-[0.08em] text-white">
                Log In
              </span>
              <Link
                href="/list-your-studio"
                className="flex-1 rounded-full py-2.5 text-center text-xs font-semibold uppercase tracking-[0.08em] text-ink/50 transition-colors hover:text-ink"
              >
                Sign Up
              </Link>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                  Studio email
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
                Log In
              </button>
            </form>

            <p className="mt-5 text-center text-xs text-ink/50">
              New studio?{" "}
              <Link href="/list-your-studio" className="font-bold text-red">
                List your studio
              </Link>{" "}
              to get started.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
