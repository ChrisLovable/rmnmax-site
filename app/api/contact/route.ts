import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "roynaude.roy@gmail.com";

export async function POST(req: NextRequest) {
  let body: {
    name?: string;
    company?: string;
    email?: string;
    phone?: string;
    message?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, company, email, phone, message } = body;

  if (!name || !company || !email) {
    return NextResponse.json(
      { error: "Name, company and email are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  try {
    const { error } = await resend.emails.send({
      from: "RMNMax Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New demo request from ${company}`,
      html: `
        <h2>New demo request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message || "No message provided.").replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
