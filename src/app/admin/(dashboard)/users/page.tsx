import { Trash2, UserPlus } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { auth } from "@/lib/auth";
import { createUser, deleteUser } from "@/app/admin/actions";
import { db } from "@/lib/db";

export default async function AdminUsersPage() {
  const session = await auth();
  const users = await db.user.findMany({ orderBy: { createdAt: "asc" } });

  return (
    <div>
      <AdminPageHeader
        title="Users"
        description="Manage who has access to the Broformer admin."
      />

      <form
        action={createUser}
        className="mb-6 grid grid-cols-1 gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink/5 sm:grid-cols-2 lg:grid-cols-5 lg:items-end"
      >
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
            Name
          </span>
          <input
            required
            name="name"
            className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
            Email
          </span>
          <input
            required
            type="email"
            name="email"
            className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
            Password
          </span>
          <input
            required
            type="password"
            name="password"
            minLength={8}
            placeholder="8+ characters"
            className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-red/30"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-ink/50">
            Role
          </span>
          <select
            name="role"
            defaultValue="EDITOR"
            className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-red/30"
          >
            <option value="EDITOR">Editor</option>
            <option value="ADMIN">Admin</option>
          </select>
        </label>
        <button
          type="submit"
          className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-red px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-ink"
        >
          <UserPlus size={14} />
          Add User
        </button>
      </form>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink/5 text-xs font-semibold uppercase tracking-[0.08em] text-ink/40">
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3">Email</th>
              <th className="px-5 py-3">Role</th>
              <th className="px-5 py-3">Last Login</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-ink/5 last:border-0">
                <td className="px-5 py-3 font-semibold text-ink">{user.name}</td>
                <td className="px-5 py-3 text-ink/50">{user.email}</td>
                <td className="px-5 py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      user.role === "ADMIN"
                        ? "bg-red/10 text-red"
                        : "bg-ink/5 text-ink/50"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-5 py-3 text-ink/40">
                  {user.lastLoginAt ? user.lastLoginAt.toLocaleString() : "Never"}
                </td>
                <td className="px-5 py-3 text-right">
                  {session?.user?.id !== user.id && (
                    <form action={deleteUser.bind(null, user.id)}>
                      <button
                        type="submit"
                        aria-label="Remove user"
                        className="cursor-pointer text-ink/30 transition-colors hover:text-red"
                      >
                        <Trash2 size={15} />
                      </button>
                    </form>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
