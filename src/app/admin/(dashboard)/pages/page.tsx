import Link from "next/link";
import { Plus } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { createPage } from "@/app/admin/actions";
import { db } from "@/lib/db";

export default async function AdminPagesListPage() {
  const pages = await db.page.findMany({
    orderBy: { updatedAt: "desc" },
    include: { updatedBy: true, seo: true },
  });

  return (
    <div>
      <AdminPageHeader
        title="Pages"
        description="Manage site content, drafts and publish status."
      />

      <form
        action={createPage}
        className="mb-6 flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink/5 sm:flex-row sm:items-end"
      >
        <label className="flex-1">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
            Slug
          </span>
          <input
            required
            name="slug"
            placeholder="/new-page"
            className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-red/30"
          />
        </label>
        <label className="flex-1">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
            Title
          </span>
          <input
            required
            name="title"
            placeholder="New Page"
            className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-red/30"
          />
        </label>
        <button
          type="submit"
          className="flex shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-red px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-ink"
        >
          <Plus size={14} />
          New Page
        </button>
      </form>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink/5 text-xs font-semibold uppercase tracking-[0.08em] text-ink/40">
              <th className="px-5 py-3">Title</th>
              <th className="px-5 py-3">Slug</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">SEO</th>
              <th className="px-5 py-3">Updated</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.id} className="border-b border-ink/5 last:border-0">
                <td className="px-5 py-3">
                  <Link
                    href={`/admin/pages/${page.id}`}
                    className="font-semibold text-ink hover:text-red"
                  >
                    {page.title}
                  </Link>
                </td>
                <td className="px-5 py-3 text-ink/50">{page.slug}</td>
                <td className="px-5 py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      page.status === "PUBLISHED"
                        ? "bg-green-100 text-green-700"
                        : "bg-ink/5 text-ink/50"
                    }`}
                  >
                    {page.status === "PUBLISHED" ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-5 py-3 text-ink/50">
                  {page.seo?.metaTitle ? "Configured" : "Not set"}
                </td>
                <td className="px-5 py-3 text-ink/40">
                  {page.updatedAt.toLocaleDateString()}
                </td>
              </tr>
            ))}
            {pages.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-ink/40">
                  No pages yet. Create your first page above.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
