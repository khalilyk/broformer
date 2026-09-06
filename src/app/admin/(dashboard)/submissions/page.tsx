import Image from "next/image";
import { ExternalLink } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { updateSubmissionStatus } from "@/app/admin/actions";
import { db } from "@/lib/db";

export default async function AdminSubmissionsPage() {
  const submissions = await db.studioSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <AdminPageHeader
        title="Submissions"
        description="Studios that submitted a listing request via the List Your Studio form."
      />

      {submissions.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-ink/15 px-6 py-16 text-center text-ink/40">
          No submissions yet.
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((s) => (
            <div
              key={s.id}
              className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink/5 sm:flex-row"
            >
              <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl bg-cream sm:h-24 sm:w-24">
                {s.photoUrl ? (
                  <Image src={s.photoUrl} alt={s.studioName} fill className="object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-[11px] text-ink/30">
                    No photo
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-bold text-ink">{s.studioName}</h3>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      s.status === "APPROVED"
                        ? "bg-green-100 text-green-700"
                        : s.status === "REJECTED"
                        ? "bg-red/10 text-red"
                        : "bg-ink/5 text-ink/50"
                    }`}
                  >
                    {s.status}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-ink/50">
                  {s.city}, {s.country} · {s.contactName} · {s.email} · {s.contactNumber}
                </p>
                {s.message && (
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/70">{s.message}</p>
                )}
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href={s.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-red hover:text-ink"
                  >
                    Maps <ExternalLink size={11} />
                  </a>
                  {s.website && (
                    <a
                      href={s.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-red hover:text-ink"
                    >
                      Website <ExternalLink size={11} />
                    </a>
                  )}
                  <span className="text-ink/35">{s.createdAt.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex shrink-0 gap-2 sm:flex-col">
                <form action={updateSubmissionStatus.bind(null, s.id, "APPROVED")}>
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-red"
                  >
                    Approve
                  </button>
                </form>
                <form action={updateSubmissionStatus.bind(null, s.id, "REJECTED")}>
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-ink/60 transition-colors hover:border-red hover:text-red"
                  >
                    Reject
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
