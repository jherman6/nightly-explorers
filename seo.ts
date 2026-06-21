import { NextResponse } from "next/server";
import { recordLead } from "@/lib/leads";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message || "Please check your details and try again.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  await recordLead("contact", parsed.data);

  return NextResponse.json({ success: true });
}
