import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

interface AddToWaitlistInput {
  firstName: string;
  email: string;
}

export type WaitlistResult =
  | { status: "created" }
  | { status: "duplicate" }
  | { status: "error"; error: string };

// Postgres unique_violation error code — raised when the `email` column's
// UNIQUE constraint rejects a duplicate insert.
const UNIQUE_VIOLATION = "23505";

/**
 * Inserts a signup into the `waitlist` table.
 *
 * Unlike the older recordLead() helper (still used by the contact form,
 * targeting a generic `leads` table), this function never silently
 * swallows a failure — it returns a typed result so the API route can
 * give the user an accurate response instead of a false "success".
 */
export async function addToWaitlist({
  firstName,
  email,
}: AddToWaitlistInput): Promise<WaitlistResult> {
  if (!isSupabaseConfigured()) {
    console.error(
      "[waitlist] SUPABASE_URL / SUPABASE_SECRET_KEY are not set — cannot save signup."
    );
    return { status: "error", error: "Supabase is not configured." };
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    console.error("[waitlist] Supabase client failed to initialize.");
    return { status: "error", error: "Supabase client unavailable." };
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ first_name: firstName, email: email.toLowerCase() });

  if (!error) {
    return { status: "created" };
  }

  if (error.code === UNIQUE_VIOLATION) {
    return { status: "duplicate" };
  }

  console.error("[waitlist] Supabase insert failed:", error.message, error);
  return { status: "error", error: error.message };
}
