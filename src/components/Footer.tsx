import Link from "next/link";
import GlowGroup from "./GlowGroup";
import GoalCounter from "./GoalCounter";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Find A Class", href: "/studios#listings" },
      { label: "Why Broformer", href: "/#why-broformer" },
      { label: "The Movement", href: "/#the-movement" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    title: "For Studios",
    links: [
      { label: "Studios", href: "/studios" },
      { label: "List Your Studio", href: "/list-your-studio" },
      { label: "Partner With Us", href: "/partner-with-us" },
      { label: "Log In", href: "/login" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pt-16">
      <div className="container-x border-b border-white/10 pb-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
          Our Goal
        </span>
        <GoalCounter
          target={1_000_000}
          className="mt-3 font-display text-6xl tabular-nums text-red sm:text-7xl md:text-8xl"
        />
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
          Men Moving Worldwide
        </p>
      </div>

      <div className="container-x flex flex-col items-center border-b border-white/10 py-12 text-center">
        <Link href="/">
          <Logo className="text-3xl" />
        </Link>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
          The global home of men&apos;s reformer Pilates. Connecting men
          with studios and building a stronger, more mobile world.
        </p>
        <div className="mt-6 flex gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-red hover:bg-red hover:text-white"
            >
              <social.icon className="h-[17px] w-[17px]" />
            </a>
          ))}
        </div>
      </div>

      <GlowGroup className="container-x mx-auto grid max-w-3xl grid-cols-1 gap-10 py-12 text-center sm:grid-cols-3">
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              {col.title}
            </h4>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </GlowGroup>

      <div className="border-t border-white/10 py-6">
        <div className="container-x flex flex-col-reverse items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <span>© {year} Broformer</span>
          <span>Built for men, everywhere.</span>
        </div>
      </div>
    </footer>
  );
}
