import { NextResponse } from "next/server";

/**
 * POST /api/assessment
 * Receives AI Readiness Assessment submissions.
 *
 * Currently logs to server console and returns success.
 * TODO: Wire to an email service or CRM to deliver the report.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { answers, score, dimensions, competitors } = body;

    // Basic validation
    if (!answers || !answers.email) {
      return NextResponse.json(
        { error: "Assessment answers with email are required." },
        { status: 400 }
      );
    }

    // Log submission (visible in Vercel function logs)
    console.log("[Assessment Submission]", {
      name: answers.name,
      email: answers.email,
      company: answers.company,
      website: answers.website,
      score,
      dimensions,
      competitors,
      allAnswers: answers,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send via email service when configured
    // TODO: Store in a CRM or database for follow-up

    return NextResponse.json({ success: true });
  } catch {
    console.error("[Assessment Error]", "Failed to process submission");
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 }
    );
  }
}
