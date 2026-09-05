import Image from "next/image";
import { Trash2, Upload } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { deleteMedia, uploadMedia } from "@/app/admin/actions";
import { db } from "@/lib/db";

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default async function AdminMediaPage() {
  const assets = await db.mediaAsset.findMany({
    orderBy: { uploadedAt: "desc" },
    include: { uploadedBy: true },
  });

  return (
    <div>
      <AdminPageHeader
        title="Media Library"
        description="Upload and manage images used across the site. Files are stored on Vercel Blob."
      />

      <form
        action={uploadMedia}
        className="mb-6 flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink/5 sm:flex-row sm:items-center"
      >
        <input
          required
          type="file"
          name="file"
          accept="image/*"
          className="flex-1 text-sm text-ink/70 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-cream file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-[0.08em] file:text-ink"
        />
        <button
          type="submit"
          className="flex shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-red px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-ink"
        >
          <Upload size={14} />
          Upload
        </button>
      </form>

      {assets.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-ink/15 px-6 py-16 text-center text-ink/40">
          No media uploaded yet.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5"
            >
              <div className="relative aspect-square bg-cream">
                {asset.contentType.startsWith("image/") ? (
                  <Image
                    src={asset.url}
                    alt={asset.filename}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-ink/40">
                    {asset.contentType}
                  </div>
                )}
                <form action={deleteMedia.bind(null, asset.id)}>
                  <button
                    type="submit"
                    aria-label="Delete"
                    className="absolute right-2 top-2 cursor-pointer rounded-full bg-black/60 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red"
                  >
                    <Trash2 size={13} />
                  </button>
                </form>
              </div>
              <div className="p-3">
                <p className="truncate text-xs font-semibold text-ink">
                  {asset.filename}
                </p>
                <p className="text-[11px] text-ink/40">
                  {formatBytes(asset.size)}
                  {asset.uploadedBy ? ` · ${asset.uploadedBy.name}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
