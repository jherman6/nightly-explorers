/**
 * Sends a lead (waitlist signup or contact message) to wherever you've
 * configured. Point LEADS_WEBHOOK_URL at:
 *  - a Zapier "Catch Hook" / Make.com webhook
 *  - a Supabase Edge Function or database insert endpoint
 *  - ConvertKit / Mailchimp / Resend's API (via a small relay function)
 *
 * If LEADS_WEBHOOK_URL isn't set, the lead is just logged so nothing
 * is silently lost during development or before you've picked a tool.
 */
export async function recordLead(
  type: "waitlist" | "contact",
  data: Record<string, unknown>
): Promise<void> {
  const webhookUrl = process.env.LEADS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log(`[leads] (${type}) no LEADS_WEBHOOK_URL configured —`, data);
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, ...data, submittedAt: new Date().toISOString() }),
    });

    if (!response.ok) {
      console.error(`[leads] webhook responded with ${response.status}`);
    }
  } catch (error) {
    console.error("[leads] failed to reach webhook:", error);
  }
}
