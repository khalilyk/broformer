import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Trash2 } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { deletePage, updatePage, upsertSeo } from "@/app/admin/actions";
import { db } from "@/lib/db";

export default async function PageEditor({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const page = await db.page.findUnique({ where: { id }, include: { seo: true, updatedBy: true } });
  if (!page) notFound();

  const boundUpdatePage = updatePage.bind(null, page.id);
  const boundUpsertSeo = upsertSeo.bind(null, page.id);
  const boundDeletePage = deletePage.bind(null, page.id);

  return (
    <div>
      <Link
        href="/admin/pages"
        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-ink/50 hover:text-red"
      >
        <ArrowLeft size={14} />
        All Pages
      </Link>

      <AdminPageHeader
        title={page.title}
        description={`${page.slug} · Last updated ${page.updatedAt.toLocaleString()}${page.updatedBy ? ` by ${page.updatedBy.name}` : ""}`}
        action={
          <form action={boundDeletePage}>
            <button
              type="submit"
              className="flex cursor-pointer items-center gap-1.5 rounded-full border border-red/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-red transition-colors hover:bg-red hover:text-white"
            >
              <Trash2 size={13} />
              Delete Page
            </button>
          </form>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <form
          action={boundUpdatePage}
          className="lg:col-span-2 space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-ink">
            Content
          </h2>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
              Title
            </span>
            <input
              name="title"
              defaultValue={page.title}
              className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
              Content
            </span>
            <textarea
              name="content"
              rows={12}
              defaultValue={page.content}
              placeholder="Page body content..."
              className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-red/30"
            />
          </label>
          <label className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
              Status
            </span>
            <select
              name="status"
              defaultValue={page.status}
              className="rounded-full border border-ink/15 bg-cream px-4 py-1.5 text-xs font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
            >
              <option value="DRAFT">Draft</option>
              <option value="PUBLISHED">Published</option>
            </select>
          </label>
          <button
            type="submit"
            className="cursor-pointer rounded-full bg-red px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-ink"
          >
            Save Changes
          </button>
        </form>

        <form
          action={boundUpsertSeo}
          className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-ink">
            SEO / AEO
          </h2>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
              Meta Title
            </span>
            <input
              name="metaTitle"
              defaultValue={page.seo?.metaTitle ?? ""}
              className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
              Meta Description
            </span>
            <textarea
              name="metaDescription"
              rows={3}
              defaultValue={page.seo?.metaDescription ?? ""}
              className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
              Focus Keyword
            </span>
            <input
              name="focusKeyword"
              defaultValue={page.seo?.focusKeyword ?? ""}
              className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
              OG Image URL
            </span>
            <input
              name="ogImage"
              defaultValue={page.seo?.ogImage ?? ""}
              className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
              AI / Answer-Engine Summary
            </span>
            <textarea
              name="aiSummary"
              rows={3}
              defaultValue={page.seo?.aiSummary ?? ""}
              placeholder="A short, direct summary written for AI answer engines (ChatGPT, Perplexity, AI Overviews)."
              className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-red/30"
            />
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="indexable"
              defaultChecked={page.seo?.indexable ?? true}
              className="h-4 w-4 accent-red"
            />
            <span className="text-xs font-semibold text-ink/70">
              Allow search engines to index this page
            </span>
          </label>
          <button
            type="submit"
            className="cursor-pointer rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-red"
          >
            Save SEO Settings
          </button>
        </form>
      </div>
    </div>
  );
}
