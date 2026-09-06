"use server";

import { CONTACT_INBOX, getResend } from "@/lib/email";

export async function sendContactMessage(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !topic || !message) {
    throw new Error("Please fill in all fields.");
  }

  const resend = getResend();

  await resend.emails.send({
    from: "Broformer Contact Form <onboarding@resend.dev>",
    to: CONTACT_INBOX,
    replyTo: email,
    subject: `New contact message: ${topic}`,
    text: `From: ${name} <${email}>\nTopic: ${topic}\n\n${message}`,
    html: `
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Topic:</strong> ${topic}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  });
}
