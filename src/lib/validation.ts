import { z } from "zod";

export const waitlistSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Please enter your first name.")
    .max(60, "That name's a bit long — try fewer characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  source: z.string().optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(80, "That name's a bit long — try fewer characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more — at least 10 characters.")
    .max(2000, "That message is a bit long — try trimming it down."),
});

export type ContactInput = z.infer<typeof contactSchema>;
