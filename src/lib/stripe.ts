import Stripe from "stripe";

let stripeClient: Stripe | null = null;

/**
 * Returns a Stripe client if STRIPE_SECRET_KEY is configured, or null
 * otherwise. Callers should fall back to waitlist-only behavior when
 * this returns null, so the site works before Stripe is set up.
 */
export function getStripeClient(): Stripe | null {
  if (stripeClient) return stripeClient;

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;

  stripeClient = new Stripe(key, {
    apiVersion: "2025-02-24.acacia",
  });

  return stripeClient;
}

export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY && process.env.STRIPE_PRICE_ID);
}
