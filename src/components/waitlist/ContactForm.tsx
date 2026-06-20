"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("We couldn't reach the server. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-brand border border-[rgba(13,42,22,0.1)] bg-[rgba(62,111,57,0.1)] p-8 text-center"
      >
        <p className="font-display text-xl font-semibold text-forest-night">
          Message sent — thank you.
        </p>
        <p className="mt-2 text-[15px] text-[#445848]">
          We read every note and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-[14px] font-bold text-forest-night">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-[rgba(13,42,22,0.15)] bg-white px-4 py-3 text-[15px] text-forest-night focus:border-amber-glow focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-[14px] font-bold text-forest-night">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-[rgba(13,42,22,0.15)] bg-white px-4 py-3 text-[15px] text-forest-night focus:border-amber-glow focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-[14px] font-bold text-forest-night">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-xl border border-[rgba(13,42,22,0.15)] bg-white px-4 py-3 text-[15px] text-forest-night focus:border-amber-glow focus:outline-none"
        />
      </div>

      {status === "error" && errorMessage ? (
        <p role="alert" className="text-[13.5px] font-semibold text-bark-dark">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-amber-light to-amber-glow px-7 py-3.5 text-[15.5px] font-bold text-[#2a1604] shadow-[0_10px_30px_-8px_rgba(196,123,31,0.65)] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
