-- Run this in your Supabase project's SQL Editor (Database > SQL Editor).
-- Safe to re-run: every statement is idempotent.

-- Required for gen_random_uuid() below. Supabase usually has this enabled
-- by default, but this makes the script work even on a brand-new project.
create extension if not exists pgcrypto;

create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  email text not null
);

-- Enforce no-duplicate-emails at the database level, not just in app code.
-- This is what addToWaitlist() in src/lib/waitlist.ts relies on to detect
-- duplicates safely (catching Postgres error code 23505), even if two
-- submissions for the same email land at nearly the same instant.
create unique index if not exists waitlist_email_unique_idx
  on waitlist (email);

-- Row Level Security: on, with no policies defined. The app only ever
-- talks to this table using the SUPABASE_SECRET_KEY (service role) from
-- server-side API routes, which bypasses RLS entirely — so this simply
-- makes sure no other key (e.g. a public/anon key) can read or write to
-- this table if one ever gets exposed client-side by mistake.
alter table waitlist enable row level security;
