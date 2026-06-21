import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

/**
 * Records a lead (waitlist signup or contact message).
 *
 * - If Supabase is configured (SUPABASE_URL + SUPABASE_SECRET_KEY), the
 *   lead is inserted into the `leads` table.
 * - If LEADS_WEBHOOK_URL is also set, the lead is additionally sent
 *   there (e.g. to trigger a Zapier/Make automation or Slack alert).
 * - If neither is configured, the lead is just logged so nothing is
 *   silently lost during development.
 */
export async function recordLead(
  type: "waitlist" | "contact",
  data: Record<string, unknown>
): Promise<void> {
  let wroteSomewhere = false;

  if (isSupabaseConfigured()) {
    const supabase = getSupabaseClient();
    if (supabase) {
      const { error } = await supabase.from("leads").insert({
        type,
        first_name: data.firstName ?? null,
        name: data.name ?? null,
        email: data.email ?? null,
        message: data.message ?? null,
        source: data.source ?? null,
      });

      if (error) {
        console.error("[leads] Supabase insert failed:", error.message);
      } else {
        wroteSomewhere = true;
      }
    }
  }

  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...data, submittedAt: new Date().toISOString() }),
      });
      if (!response.ok) {
        console.error(`[leads] webhook responded with ${response.status}`);
      } else {
        wroteSomewhere = true;
      }
    } catch (error) {
      console.error("[leads] failed to reach webhook:", error);
    }
  }

  if (!wroteSomewhere) {
    console.log(`[leads] (${type}) no Supabase or webhook configured —`, data);
  }
}
