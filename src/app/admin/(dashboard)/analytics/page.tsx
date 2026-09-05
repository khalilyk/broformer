import AdminPageHeader from "@/components/admin/AdminPageHeader";
import StatCard from "@/components/admin/StatCard";
import { db } from "@/lib/db";
import { Eye, Globe, TrendingUp } from "lucide-react";

export default async function AdminAnalyticsPage() {
  const now = new Date();
  const fourteenDaysAgo = new Date(now);
  fourteenDaysAgo.setDate(now.getDate() - 13);
  fourteenDaysAgo.setHours(0, 0, 0, 0);

  const [totalViews, recentViews, topPathsRaw] = await Promise.all([
    db.pageView.count(),
    db.pageView.findMany({
      where: { createdAt: { gte: fourteenDaysAgo } },
      select: { path: true, createdAt: true },
    }),
    db.pageView.groupBy({
      by: ["path"],
      _count: { path: true },
      orderBy: { _count: { path: "desc" } },
      take: 8,
    }),
  ]);

  const days: { label: string; count: number }[] = [];
  for (let i = 0; i < 14; i++) {
    const d = new Date(fourteenDaysAgo);
    d.setDate(fourteenDaysAgo.getDate() + i);
    const key = d.toDateString();
    const count = recentViews.filter((v) => v.createdAt.toDateString() === key).length;
    days.push({
      label: d.toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      count,
    });
  }
  const maxCount = Math.max(1, ...days.map((d) => d.count));
  const uniquePaths = new Set(recentViews.map((v) => v.path)).size;

  return (
    <div>
      <AdminPageHeader
        title="Analytics"
        description="Self-hosted pageview tracking across the public site."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total Pageviews" value={totalViews} icon={Eye} />
        <StatCard
          label="Views (14d)"
          value={recentViews.length}
          icon={TrendingUp}
        />
        <StatCard label="Unique Paths (14d)" value={uniquePaths} icon={Globe} />
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
        <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-ink">
          Pageviews, Last 14 Days
        </h2>
        <div className="mt-6 flex h-40 items-end gap-2">
          {days.map((day) => (
            <div key={day.label} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full rounded-t-md bg-red/80 transition-all"
                style={{ height: `${(day.count / maxCount) * 100}%`, minHeight: day.count > 0 ? "4px" : "0" }}
              />
              <span className="text-[10px] text-ink/40">{day.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
        <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-ink">
          Top Pages (All Time)
        </h2>
        <div className="mt-4 space-y-2">
          {topPathsRaw.length === 0 && (
            <p className="text-xs text-ink/40">No traffic recorded yet.</p>
          )}
          {topPathsRaw.map((row) => (
            <div
              key={row.path}
              className="flex items-center justify-between border-b border-ink/5 py-2 text-sm last:border-0"
            >
              <span className="text-ink/80">{row.path}</span>
              <span className="font-semibold text-ink">{row._count.path}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
