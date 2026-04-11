import { NextResponse } from "next/server";

/**
 * Placeholder endpoint for summer plan lead capture.
 * TODO: Subscribe to Mailchimp (or similar) — use server-side API key, never expose to client.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { parentName, childName, email } = body ?? {};

    if (
      typeof parentName !== "string" ||
      typeof childName !== "string" ||
      typeof email !== "string" ||
      !email.includes("@")
    ) {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    // TODO: Mailchimp — e.g. lists.addListMember(listId, { email_address, merge_fields, status })
    console.info("[summer-plan-lead]", { parentName, childName, email });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}
