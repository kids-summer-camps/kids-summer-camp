export type SummerPlanLead = {
  parentName: string;
  childName: string;
  email: string;
};

const STORAGE_KEY = "kid-summer-plan-lead";

/** Persist locally so the quiz + results can personalize copy. */
export function saveSummerPlanLeadLocal(lead: SummerPlanLead) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...lead, submittedAt: Date.now() })
    );
  } catch {
    /* ignore */
  }
}

export function loadSummerPlanLeadLocal(): (SummerPlanLead & { submittedAt?: number }) | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SummerPlanLead & { submittedAt?: number };
  } catch {
    return null;
  }
}

/**
 * Dummy submit — replace with Mailchimp (or your ESP) via Route Handler / Edge function.
 * See `app/api/summer-plan-lead/route.ts`.
 */
export async function submitSummerPlanLead(lead: SummerPlanLead): Promise<{ ok: boolean }> {
  const res = await fetch("/api/summer-plan-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  if (!res.ok) throw new Error("Submit failed");
  saveSummerPlanLeadLocal(lead);
  return { ok: true };
}
