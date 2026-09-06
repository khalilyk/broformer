import { Resend } from "resend";

export const CONTACT_INBOX = "cantbekhalil@gmail.com";

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it to .env (and your Vercel project env vars) to enable email sending."
    );
  }
  return new Resend(apiKey);
}
