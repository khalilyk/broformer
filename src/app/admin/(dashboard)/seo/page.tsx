import Link from "next/link";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import StatCard from "@/components/admin/StatCard";
import { db } from "@/lib/db";

export default async function AdminSeoPage() {
  const pages = await db.page.findMany({
    include: { seo: true },
    orderBy: { title: "asc" },
  });

  const configured = pages.filter((p) => p.seo?.metaTitle && p.seo?.metaDescription);
  const withAeoSummary = pages.filter((p) => p.seo?.aiSummary);
  const noIndex = pages.filter((p) => p.seo && !p.seo.indexable);

  return (
    <div>
      <AdminPageHeader
        title="SEO / AEO"
        description="Audit search and AI-answer-engine readiness across every page. Edit fields from each page's editor."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          label="SEO Configured"
          value={`${configured.length}/${pages.length}`}
          icon={CheckCircle2}
        />
        <StatCard
          label="AEO Summary Set"
          value={`${withAeoSummary.length}/${pages.length}`}
          icon={CheckCircle2}
        />
        <StatCard label="No-Index Pages" value={noIndex.length} icon={AlertTriangle} />
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink/5 text-xs font-semibold uppercase tracking-[0.08em] text-ink/40">
              <th className="px-5 py-3">Page</th>
              <th className="px-5 py-3">Meta Title</th>
              <th className="px-5 py-3">Meta Description</th>
              <th className="px-5 py-3">AEO Summary</th>
              <th className="px-5 py-3">Indexable</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => {
              const titleLen = page.seo?.metaTitle?.length ?? 0;
              const descLen = page.seo?.metaDescription?.length ?? 0;
              return (
                <tr key={page.id} className="border-b border-ink/5 last:border-0">
                  <td className="px-5 py-3">
                    <Link
                      href={`/admin/pages/${page.id}`}
                      className="font-semibold text-ink hover:text-red"
                    >
                      {page.title}
                    </Link>
                    <p className="text-xs text-ink/40">{page.slug}</p>
                  </td>
                  <td className="px-5 py-3">
                    {titleLen === 0 ? (
                      <span className="text-ink/30">Not set</span>
                    ) : (
                      <span className={titleLen > 60 ? "text-amber-600" : "text-ink/70"}>
                        {titleLen} chars
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3">
                    {descLen === 0 ? (
                      <span className="text-ink/30">Not set</span>
                    ) : (
                      <span className={descLen > 160 ? "text-amber-600" : "text-ink/70"}>
                        {descLen} chars
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3">
                    {page.seo?.aiSummary ? (
                      <span className="text-green-700">Set</span>
                    ) : (
                      <span className="text-ink/30">Not set</span>
                    )}
                  </td>
                  <td className="px-5 py-3">
                    {page.seo?.indexable === false ? (
                      <span className="rounded-full bg-red/10 px-2.5 py-1 text-xs font-semibold text-red">
                        No-Index
                      </span>
                    ) : (
                      <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                        Indexed
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
