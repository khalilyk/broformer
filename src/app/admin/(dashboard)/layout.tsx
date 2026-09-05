import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { auth } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-cream">
      <AdminSidebar
        userName={session.user.name ?? "Admin"}
        userEmail={session.user.email ?? ""}
      />
      <main className="ml-64 min-h-screen px-8 py-8">{children}</main>
    </div>
  );
}
