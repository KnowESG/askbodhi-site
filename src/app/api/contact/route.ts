import { NextResponse } from "next/server";

/**
 * POST /api/contact
 * Receives contact form submissions (name, email, website, message).
 *
 * Currently logs to server console and returns success.
 * TODO: Wire to an email service (Resend, SendGrid, or Formspree)
 *       using CONTACT_FORM_API_KEY / CONTACT_FORM_ENDPOINT env vars.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, website, message } = body;

    // Basic validation
    if (!name || !email || !website) {
      return NextResponse.json(
        { error: "Name, email, and website are required." },
        { status: 400 }
      );
    }

    // Log submission (visible in Vercel function logs)
    console.log("[Contact Form Submission]", {
      name,
      email,
      website,
      message: message || "(no message)",
      timestamp: new Date().toISOString(),
    });

    // TODO: Send via email service when CONTACT_FORM_ENDPOINT is configured
    // const endpoint = process.env.CONTACT_FORM_ENDPOINT;
    // const apiKey = process.env.CONTACT_FORM_API_KEY;
    // if (endpoint && apiKey) {
    //   await fetch(endpoint, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    //     body: JSON.stringify({ name, email, website, message }),
    //   });
    // }

    return NextResponse.json({ success: true });
  } catch {
    console.error("[Contact Form Error]", "Failed to process submission");
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 }
    );
  }
}
