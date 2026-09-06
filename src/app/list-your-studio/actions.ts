"use server";

import { put } from "@vercel/blob";
import { db } from "@/lib/db";

export async function submitStudioListing(formData: FormData) {
  const studioName = String(formData.get("studioName") ?? "").trim();
  const contactName = String(formData.get("contactName") ?? "").trim();
  const contactNumber = String(formData.get("contactNumber") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();
  const googleMapsLink = String(formData.get("googleMapsLink") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (
    !studioName ||
    !contactName ||
    !contactNumber ||
    !email ||
    !city ||
    !country ||
    !googleMapsLink
  ) {
    throw new Error("Please fill in all required fields.");
  }

  let photoUrl = "";
  const photo = formData.get("photo");
  if (photo instanceof File && photo.size > 0) {
    const blob = await put(`studio-submissions/${Date.now()}-${photo.name}`, photo, {
      access: "public",
    });
    photoUrl = blob.url;
  }

  await db.studioSubmission.create({
    data: {
      studioName,
      contactName,
      contactNumber,
      email,
      city,
      country,
      googleMapsLink,
      website,
      message,
      photoUrl,
    },
  });
}
