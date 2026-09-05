"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  LayoutDashboard,
  LogOut,
  Search,
  Shield,
  Users,
} from "lucide-react";
import Logo from "@/components/Logo";

const NAV = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Pages", href: "/admin/pages", icon: FileText },
  { label: "Media Library", href: "/admin/media", icon: ImageIcon },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "SEO / AEO", href: "/admin/seo", icon: Search },
  { label: "Security", href: "/admin/security", icon: Shield },
];

export default function AdminSidebar({
  userName,
  userEmail,
}: {
  userName: string;
  userEmail: string;
}) {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-64 shrink-0 flex-col bg-ink">
      <div className="flex h-16 items-center px-6">
        <Link href="/admin">
          <Logo className="text-xl" />
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-2">
        {NAV.map((item) => {
          const active =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                active
                  ? "bg-red text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon size={17} strokeWidth={1.75} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white/50 transition-colors hover:bg-white/5 hover:text-white"
        >
          <ExternalLink size={14} />
          View Live Site
        </a>

        <div className="mt-3 flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-red text-xs font-bold text-white">
            {userName.slice(0, 1).toUpperCase()}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-bold text-white">{userName}</p>
            <p className="truncate text-[11px] text-white/40">{userEmail}</p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            aria-label="Sign out"
            className="cursor-pointer text-white/50 transition-colors hover:text-red"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
