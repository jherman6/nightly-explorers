import { getFromAddress, getResendClient, isResendConfigured } from "@/lib/resend";
import { getWelcomeEmailHtml, getWelcomeEmailText, WELCOME_EMAIL_SUBJECT } from "@/emails/welcome-email";

interface SendWelcomeEmailInput {
  firstName: string;
  email: string;
}

interface SendWelcomeEmailResult {
  sent: boolean;
  error?: string;
}

/**
 * Sends the welcome email via Resend. Never throws — a failed or skipped
 * email should never take down a waitlist signup that already succeeded
 * in Supabase. Callers should log the result but not block the API
 * response on it.
 */
export async function sendWelcomeEmail({
  firstName,
  email,
}: SendWelcomeEmailInput): Promise<SendWelcomeEmailResult> {
  if (!isResendConfigured()) {
    console.error("[email] RESEND_API_KEY is not set — skipping welcome email.");
    return { sent: false, error: "Resend is not configured." };
  }

  const resend = getResendClient();
  if (!resend) {
    console.error("[email] Resend client failed to initialize.");
    return { sent: false, error: "Resend client unavailable." };
  }

  try {
    const { error } = await resend.emails.send({
      from: getFromAddress(),
      to: email,
      subject: WELCOME_EMAIL_SUBJECT,
      html: getWelcomeEmailHtml({ firstName }),
      text: getWelcomeEmailText({ firstName }),
    });

    if (error) {
      console.error("[email] Resend rejected the send:", error);
      return { sent: false, error: error.message };
    }

    return { sent: true };
  } catch (error) {
    console.error("[email] Unexpected error sending welcome email:", error);
    return { sent: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
