import Link from "next/link";
import { FileText, Image as ImageIcon, ShieldCheck, TrendingUp, Users } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import StatCard from "@/components/admin/StatCard";
import { db } from "@/lib/db";

export default async function AdminOverviewPage() {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const [pageCount, publishedCount, mediaCount, userCount, viewsToday, viewsWeek, recentLogs] =
    await Promise.all([
      db.page.count(),
      db.page.count({ where: { status: "PUBLISHED" } }),
      db.mediaAsset.count(),
      db.user.count(),
      db.pageView.count({ where: { createdAt: { gte: startOfDay } } }),
      db.pageView.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
      db.auditLog.findMany({
        orderBy: { createdAt: "desc" },
        take: 6,
        include: { actor: true },
      }),
    ]);

  return (
    <div>
      <AdminPageHeader
        title="Overview"
        description="A snapshot of your site's content, traffic and team."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Pages"
          value={pageCount}
          icon={FileText}
          hint={`${publishedCount} published`}
        />
        <StatCard label="Media Assets" value={mediaCount} icon={ImageIcon} />
        <StatCard label="Team Members" value={userCount} icon={Users} />
        <StatCard
          label="Pageviews (7d)"
          value={viewsWeek}
          icon={TrendingUp}
          hint={`${viewsToday} today`}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
          <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-ink">
            Quick Actions
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Link
              href="/admin/pages"
              className="rounded-xl border border-ink/10 p-4 text-sm font-semibold text-ink transition-colors hover:border-red hover:text-red"
            >
              Edit a page
            </Link>
            <Link
              href="/admin/media"
              className="rounded-xl border border-ink/10 p-4 text-sm font-semibold text-ink transition-colors hover:border-red hover:text-red"
            >
              Upload media
            </Link>
            <Link
              href="/admin/users"
              className="rounded-xl border border-ink/10 p-4 text-sm font-semibold text-ink transition-colors hover:border-red hover:text-red"
            >
              Invite a teammate
            </Link>
            <Link
              href="/admin/seo"
              className="rounded-xl border border-ink/10 p-4 text-sm font-semibold text-ink transition-colors hover:border-red hover:text-red"
            >
              Review SEO / AEO
            </Link>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-ink">
            <ShieldCheck size={15} className="text-red" />
            Recent Activity
          </h2>
          <div className="mt-4 space-y-3">
            {recentLogs.length === 0 ? (
              <p className="text-xs text-ink/40">No activity yet.</p>
            ) : (
              recentLogs.map((log) => (
                <div key={log.id} className="text-xs">
                  <p className="font-semibold text-ink">
                    {log.actor?.name ?? "System"}{" "}
                    <span className="font-normal text-ink/50">
                      {log.action} {log.target}
                    </span>
                  </p>
                  <p className="text-ink/35">
                    {log.createdAt.toLocaleString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
