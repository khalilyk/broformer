import { KeyRound, ShieldCheck } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { changeOwnPassword } from "@/app/admin/actions";
import { db } from "@/lib/db";

export default async function AdminSecurityPage() {
  const logs = await db.auditLog.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
    include: { actor: true },
  });

  return (
    <div>
      <AdminPageHeader
        title="Security"
        description="Account security and a log of every change made in the admin."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <form
          action={changeOwnPassword}
          className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5"
        >
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-ink">
            <KeyRound size={15} className="text-red" />
            Change Password
          </h2>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
              Current Password
            </span>
            <input
              required
              type="password"
              name="currentPassword"
              className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
              New Password
            </span>
            <input
              required
              type="password"
              name="newPassword"
              minLength={8}
              placeholder="8+ characters"
              className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-red/30"
            />
          </label>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-full bg-red px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-ink"
          >
            Update Password
          </button>
        </form>

        <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-ink">
            <ShieldCheck size={15} className="text-red" />
            Audit Log
          </h2>
          <div className="mt-4 max-h-[480px] space-y-3 overflow-y-auto pr-1">
            {logs.length === 0 && (
              <p className="text-xs text-ink/40">No activity recorded yet.</p>
            )}
            {logs.map((log) => (
              <div
                key={log.id}
                className="flex items-center justify-between border-b border-ink/5 pb-3 text-sm last:border-0"
              >
                <div>
                  <p className="font-semibold text-ink">
                    {log.actor?.name ?? "System"}{" "}
                    <span className="font-normal text-ink/50">
                      {log.action} {log.target}
                    </span>
                  </p>
                </div>
                <span className="shrink-0 text-xs text-ink/35">
                  {log.createdAt.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
