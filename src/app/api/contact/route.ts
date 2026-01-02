import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend =
  process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.trim().length > 0
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

export async function POST(request: Request) {
  try {
    const { name, phone, inquiry } = await request.json();

    if (!name || !phone || !inquiry) {
      return NextResponse.json(
        { error: "Name, phone, and inquiry are required." },
        { status: 400 }
      );
    }

    if (!resend) {
      return NextResponse.json(
        { error: "Email transport is not configured on the server." },
        { status: 500 }
      );
    }

    const fromAddress =
      process.env.EMAIL_FROM || "Cuttosize <onboarding@resend.dev>";

    const recipient =
      process.env.CONTACT_RECIPIENT ||
      process.env.CONSULTATION_RECIPIENT ||
      "husseinbehairy2000@gmail.com";

    const plainText = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      "",
      "Inquiry:",
      inquiry,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: recipient,
      subject: "New contact form submission",
      text: plainText,
      html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Inquiry:</strong></p>
          <p>${inquiry.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      throw error;
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email error", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
