"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

interface WaitlistFormProps {
  source: string;
  className?: string;
  buttonLabel?: string;
}

type Status = "idle" | "submitting" | "error";

export function WaitlistForm({
  source,
  className = "",
  buttonLabel = "Join the Adventure",
}: WaitlistFormProps) {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, source }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data?.error || "Something went wrong. Please try again.");
        return;
      }

      if (data.checkoutUrl) {
        // Stripe is configured — hand off to Stripe Checkout.
        window.location.href = data.checkoutUrl;
        return;
      }

      router.push("/welcome");
    } catch {
      setStatus("error");
      setErrorMessage("We couldn't reach the server. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate>
      <div className="flex flex-wrap justify-center gap-3">
        <label className="sr-only" htmlFor={`${source}-firstName`}>
          First name
        </label>
        <input
          id={`${source}-firstName`}
          type="text"
          required
          autoComplete="given-name"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="flex-1 basis-[160px] rounded-full border border-moonbeam/30 bg-moonbeam/[0.08] px-[18px] py-[15px] text-[15px] text-moonbeam placeholder:text-moonbeam/50 focus:border-amber-light focus:outline-none"
        />

        <label className="sr-only" htmlFor={`${source}-email`}>
          Email address
        </label>
        <input
          id={`${source}-email`}
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-[2] basis-[230px] rounded-full border border-moonbeam/30 bg-moonbeam/[0.08] px-[18px] py-[15px] text-[15px] text-moonbeam placeholder:text-moonbeam/50 focus:border-amber-light focus:outline-none"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-amber-light to-amber-glow px-7 py-3.5 text-[15.5px] font-bold text-[#2a1604] shadow-[0_10px_30px_-8px_rgba(196,123,31,0.65)] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Joining…" : buttonLabel}
        </button>
      </div>

      <div aria-live="polite" className="mt-3 text-center">
        {status === "error" && errorMessage ? (
          <p role="alert" className="text-[13.5px] font-semibold text-amber-light">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
