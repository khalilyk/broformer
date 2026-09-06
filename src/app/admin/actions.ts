"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { put, del } from "@vercel/blob";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

async function requireUser() {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Not authenticated");
  return session.user;
}

async function logAudit(actorId: string, action: string, target: string) {
  await db.auditLog.create({ data: { actorId, action, target } });
}

// --- Pages ---

export async function createPage(formData: FormData) {
  const user = await requireUser();
  const slug = String(formData.get("slug") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();
  if (!slug || !title) throw new Error("Slug and title are required");

  const page = await db.page.create({
    data: { slug, title, updatedById: user.id },
  });
  await logAudit(user.id, "created page", page.slug);
  revalidatePath("/admin/pages");
  redirect(`/admin/pages/${page.id}`);
}

export async function updatePage(pageId: string, formData: FormData) {
  const user = await requireUser();
  const title = String(formData.get("title") ?? "").trim();
  const content = String(formData.get("content") ?? "");
  const status = String(formData.get("status") ?? "DRAFT") as "DRAFT" | "PUBLISHED";

  const page = await db.page.update({
    where: { id: pageId },
    data: { title, content, status, updatedById: user.id },
  });
  await logAudit(user.id, "updated page", page.slug);
  revalidatePath("/admin/pages");
  revalidatePath(`/admin/pages/${pageId}`);
}

export async function deletePage(pageId: string) {
  const user = await requireUser();
  const page = await db.page.delete({ where: { id: pageId } });
  await logAudit(user.id, "deleted page", page.slug);
  revalidatePath("/admin/pages");
}

// --- SEO ---

export async function upsertSeo(pageId: string, formData: FormData) {
  const user = await requireUser();
  const metaTitle = String(formData.get("metaTitle") ?? "");
  const metaDescription = String(formData.get("metaDescription") ?? "");
  const ogImage = String(formData.get("ogImage") ?? "");
  const focusKeyword = String(formData.get("focusKeyword") ?? "");
  const aiSummary = String(formData.get("aiSummary") ?? "");
  const indexable = formData.get("indexable") === "on";

  await db.seoSetting.upsert({
    where: { pageId },
    update: { metaTitle, metaDescription, ogImage, focusKeyword, aiSummary, indexable },
    create: { pageId, metaTitle, metaDescription, ogImage, focusKeyword, aiSummary, indexable },
  });
  await logAudit(user.id, "updated SEO for", pageId);
  revalidatePath(`/admin/pages/${pageId}`);
  revalidatePath("/admin/seo");
}

// --- Media ---

export async function uploadMedia(formData: FormData) {
  const user = await requireUser();
  const file = formData.get("file") as File | null;
  if (!file || file.size === 0) throw new Error("No file provided");

  const blob = await put(`media/${Date.now()}-${file.name}`, file, {
    access: "public",
  });

  await db.mediaAsset.create({
    data: {
      filename: file.name,
      url: blob.url,
      contentType: file.type,
      size: file.size,
      uploadedById: user.id,
    },
  });
  await logAudit(user.id, "uploaded media", file.name);
  revalidatePath("/admin/media");
}

export async function deleteMedia(id: string) {
  const user = await requireUser();
  const asset = await db.mediaAsset.delete({ where: { id } });
  await del(asset.url).catch(() => {});
  await logAudit(user.id, "deleted media", asset.filename);
  revalidatePath("/admin/media");
}

// --- Users ---

export async function createUser(formData: FormData) {
  const user = await requireUser();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const name = String(formData.get("name") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const role = String(formData.get("role") ?? "EDITOR") as "ADMIN" | "EDITOR";

  if (!email || !name || password.length < 8) {
    throw new Error("Name, email and an 8+ character password are required");
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await db.user.create({ data: { email, name, passwordHash, role } });
  await logAudit(user.id, "invited user", email);
  revalidatePath("/admin/users");
}

export async function deleteUser(id: string) {
  const user = await requireUser();
  if (user.id === id) throw new Error("You cannot remove your own account");
  const target = await db.user.delete({ where: { id } });
  await logAudit(user.id, "removed user", target.email);
  revalidatePath("/admin/users");
}

// --- Security ---

export async function changeOwnPassword(formData: FormData) {
  const user = await requireUser();
  const currentPassword = String(formData.get("currentPassword") ?? "");
  const newPassword = String(formData.get("newPassword") ?? "");

  if (newPassword.length < 8) {
    throw new Error("New password must be at least 8 characters");
  }

  const record = await db.user.findUniqueOrThrow({ where: { id: user.id } });
  const valid = await bcrypt.compare(currentPassword, record.passwordHash);
  if (!valid) throw new Error("Current password is incorrect");

  const passwordHash = await bcrypt.hash(newPassword, 10);
  await db.user.update({ where: { id: user.id }, data: { passwordHash } });
  await logAudit(user.id, "changed password for", record.email);
  revalidatePath("/admin/security");
}

// --- Studio Submissions ---

export async function updateSubmissionStatus(
  id: string,
  status: "PENDING" | "APPROVED" | "REJECTED"
) {
  const user = await requireUser();
  const submission = await db.studioSubmission.update({
    where: { id },
    data: { status },
  });
  await logAudit(user.id, `marked submission ${status.toLowerCase()} for`, submission.studioName);
  revalidatePath("/admin/submissions");
}
