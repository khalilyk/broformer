import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Find A Class", href: "#find-a-class" },
      { label: "Why Broformer", href: "#why-broformer" },
      { label: "The Movement", href: "#the-movement" },
      { label: "Journal", href: "#journal" },
      { label: "About", href: "#about" },
    ],
  },
  {
    title: "For Studios",
    links: [
      { label: "List Your Studio", href: "#list-your-studio" },
      { label: "Start a Broformer Class", href: "#find-a-class" },
      { label: "Studio Resources", href: "#for-studios" },
      { label: "Partner With Us", href: "#for-studios" },
      { label: "Log In", href: "#login" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact Us", href: "#contact" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms & Conditions", href: "#terms" },
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
      <div className="container-x grid grid-cols-1 gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <Logo className="text-3xl" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
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

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              {col.title}
            </h4>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="underline-hover text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="rounded-2xl border border-white/10 p-6 sm:col-span-2 lg:col-span-1">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red">
            Our Goal
          </span>
          <div className="mt-2 font-display text-3xl text-red">1,000,000</div>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-white/60">
            Men Moving Worldwide
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-x flex flex-col-reverse items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <span>© {year} Broformer</span>
          <span>Built for men, everywhere.</span>
        </div>
      </div>
    </footer>
  );
}
