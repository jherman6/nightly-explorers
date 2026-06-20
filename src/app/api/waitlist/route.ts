import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";
import { recordLead } from "@/lib/leads";
import { getStripeClient, isStripeConfigured } from "@/lib/stripe";
import { waitlistSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = waitlistSchema.safeParse(body);

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message || "Please check your details and try again.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { firstName, email, source } = parsed.data;

  await recordLead("waitlist", { firstName, email, source });

  if (!isStripeConfigured()) {
    return NextResponse.json({ success: true });
  }

  const stripe = getStripeClient();
  if (!stripe) {
    // Should not happen given isStripeConfigured() check, but keep the
    // waitlist working even if Stripe init unexpectedly fails.
    return NextResponse.json({ success: true });
  }

  try {
    const trialDays = Number(process.env.STRIPE_TRIAL_DAYS) || 7;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: trialDays,
        metadata: { firstName, source: source || "waitlist" },
      },
      customer_email: email,
      success_url: `${SITE.url}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE.url}/#final`,
      metadata: { firstName, source: source || "waitlist" },
    });

    return NextResponse.json({ checkoutUrl: session.url });
  } catch (error) {
    console.error("[waitlist] Stripe checkout session failed:", error);
    // The lead is already recorded — don't block the signup on a Stripe
    // hiccup, just fall back to the plain waitlist success path.
    return NextResponse.json({ success: true });
  }
}
