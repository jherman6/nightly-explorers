import { Resend } from "resend";

let resendClient: Resend | null = null;

/**
 * Returns a Resend client if RESEND_API_KEY is configured, or null
 * otherwise. Callers should treat a missing client as "skip sending the
 * email, but don't fail the request that triggered it" — a signup should
 * still succeed even if the welcome email can't go out.
 */
export function getResendClient(): Resend | null {
  if (resendClient) return resendClient;

  const key = process.env.RESEND_API_KEY;
  if (!key) return null;

  resendClient = new Resend(key);
  return resendClient;
}

export function isResendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

/** "Name <email@domain>" the welcome email sends from. Must be on a domain
 * verified in your Resend dashboard. Defaults to hello@nightlyexplorers.com
 * — override with RESEND_FROM_EMAIL if you're sending from a different
 * address or subdomain. */
export function getFromAddress(): string {
  return process.env.RESEND_FROM_EMAIL || "The Nightly Explorers <hello@nightlyexplorers.com>";
}
