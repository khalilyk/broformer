"use client";

import { BadgeCheck, CalendarCheck, CheckCircle2, ListChecks, MapPin, PenTool, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

type PlaceResult = {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
  address?: {
    city?: string;
    town?: string;
    village?: string;
    municipality?: string;
    country?: string;
  };
};

const BENEFITS = [
  {
    icon: ListChecks,
    title: "Free Listing",
    description: "Get discovered in the Broformer studio directory, no cost, ever.",
  },
  {
    icon: CalendarCheck,
    title: "Direct Bookings",
    description: "Connect with men actively searching for classes near them.",
  },
  {
    icon: PenTool,
    title: "Studio Resources",
    description: "Access our marketing playbook and men's-class messaging guides.",
  },
  {
    icon: BadgeCheck,
    title: "Co-Branding",
    description: "Run officially branded Broformer classes if it's a fit for you.",
  },
];

export default function ListYourStudioPage() {
  const [submitted, setSubmitted] = useState(false);

  const [placeQuery, setPlaceQuery] = useState("");
  const [placeResults, setPlaceResults] = useState<PlaceResult[]>([]);
  const [placeLoading, setPlaceLoading] = useState(false);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [mapsLink, setMapsLink] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    if (placeQuery.trim().length < 3) {
      const clear = setTimeout(() => setPlaceResults([]), 0);
      return () => clearTimeout(clear);
    }

    const timeout = setTimeout(async () => {
      setPlaceLoading(true);
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=5&q=${encodeURIComponent(placeQuery)}`,
          { signal: controller.signal }
        );
        const data: PlaceResult[] = await res.json();
        setPlaceResults(data);
      } catch {
        setPlaceResults([]);
      } finally {
        setPlaceLoading(false);
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [placeQuery]);

  function selectPlace(result: PlaceResult) {
    const addr = result.address ?? {};
    setCity(addr.city ?? addr.town ?? addr.village ?? addr.municipality ?? "");
    setCountry(addr.country ?? "");
    setMapsLink(`https://www.google.com/maps/search/?api=1&query=${result.lat},${result.lon}`);
    setPlaceQuery(result.display_name);
    setPlaceResults([]);
  }

  return (
    <main>
      <PageBanner
        eyebrow="For Studios"
        title="List your studio."
        subtitle="Get your classes in front of thousands of men actively searching for men's-friendly reformer Pilates."
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
              Why studios list on Broformer
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((benefit, i) => (
                <Reveal key={benefit.title} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group flex h-full cursor-default flex-col items-center rounded-2xl bg-paper p-5 text-center shadow-sm ring-1 ring-ink/10 transition-colors duration-300 hover:bg-ink"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-full border border-red/30 bg-cream text-red transition-colors duration-300 group-hover:border-red group-hover:bg-red group-hover:text-white">
                      <benefit.icon
                        size={26}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </span>
                    <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.08em] text-ink transition-colors duration-300 group-hover:text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-ink/60 transition-colors duration-300 group-hover:text-white/60">
                      {benefit.description}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-ink/50">
              Listings are reviewed within 2 business days. There&apos;s no
              cost to list. We make money when we help you fill more
              classes, not before.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-12 max-w-xl">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 md:p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <CheckCircle2 size={40} className="mx-auto text-red" />
                  <h3 className="mt-4 font-display text-xl uppercase text-ink">
                    Request received
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">
                    We&apos;ll be in touch within 2 business days to get your
                    studio listed.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Studio name" placeholder="e.g. Iron Reform" />
                    <Field label="Contact name" placeholder="Your name" />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Contact number" type="tel" placeholder="e.g. +61 400 000 000" />
                    <Field label="Email" type="email" placeholder="you@studio.com" />
                  </div>

                  <label className="relative block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                      Search for your studio
                    </span>
                    <div className="flex items-center gap-3 rounded-xl border border-ink/15 bg-cream px-4 py-3">
                      <Search size={16} className="shrink-0 text-ink/40" />
                      <input
                        type="text"
                        value={placeQuery}
                        onChange={(e) => setPlaceQuery(e.target.value)}
                        placeholder="Start typing your studio's name or address"
                        className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
                      />
                    </div>
                    {(placeLoading || placeResults.length > 0) && (
                      <div className="absolute z-10 mt-1.5 w-full overflow-hidden rounded-xl border border-ink/10 bg-white shadow-lg">
                        {placeLoading ? (
                          <p className="px-4 py-3 text-sm text-ink/50">Searching...</p>
                        ) : (
                          placeResults.map((result) => (
                            <button
                              key={result.place_id}
                              type="button"
                              onClick={() => selectPlace(result)}
                              className="flex w-full cursor-pointer items-start gap-2 px-4 py-3 text-left text-sm text-ink/80 transition-colors hover:bg-cream"
                            >
                              <MapPin size={15} className="mt-0.5 shrink-0 text-red" />
                              {result.display_name}
                            </button>
                          ))
                        )}
                      </div>
                    )}
                    <span className="mt-1.5 block text-[11px] text-ink/40">
                      Search powered by OpenStreetMap. Fills in city, country
                      and your maps link below, or enter them manually.
                    </span>
                  </label>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field
                      label="City"
                      placeholder="e.g. Sydney"
                      value={city}
                      onChange={setCity}
                    />
                    <Field
                      label="Country"
                      placeholder="e.g. Australia"
                      value={country}
                      onChange={setCountry}
                    />
                  </div>
                  <Field
                    label="Google Maps link"
                    placeholder="Paste your studio's Google Maps link"
                    value={mapsLink}
                    onChange={setMapsLink}
                  />
                  <Field label="Website (optional)" placeholder="https://" required={false} />
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
                      Tell us about your studio
                    </span>
                    <textarea
                      required
                      rows={4}
                      placeholder="Class types, schedule, what makes your studio a good fit for men's classes..."
                      className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-red/30"
                    />
                  </label>
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-full bg-red px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-ink active:scale-95"
                  >
                    Submit Studio
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  required = true,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
        {label}
      </span>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-red/30"
      />
    </label>
  );
}
