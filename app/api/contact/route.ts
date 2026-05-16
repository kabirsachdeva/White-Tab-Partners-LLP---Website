import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, office, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set.");
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const recipientEmail = process.env.CONTACT_EMAIL || "info@whitetabpartners.com";

    await resend.emails.send({
      from: "White Tab Partners Website <noreply@whitetabpartners.com>",
      to: recipientEmail,
      replyTo: email,
      subject: `New Consultation Request: ${subject || "General Enquiry"} — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #0C0C10; padding: 32px; border-radius: 8px 8px 0 0;">
            <p style="color: #B8943F; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 8px;">White Tab Partners LLP</p>
            <h1 style="color: #F5EDD8; font-size: 22px; font-weight: 400; margin: 0;">New Consultation Request</h1>
          </div>
          <div style="background: #FAF6ED; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #E8D9B8; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8D9B8; color: #8B6914; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8D9B8; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8D9B8; color: #8B6914; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8D9B8; font-size: 15px;"><a href="mailto:${email}" style="color: #8B6914;">${email}</a></td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8D9B8; color: #8B6914; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8D9B8; font-size: 15px;">${phone}</td>
              </tr>` : ""}
              ${office ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8D9B8; color: #8B6914; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Preferred Office</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8D9B8; font-size: 15px;">${office}</td>
              </tr>` : ""}
              ${subject ? `<tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8D9B8; color: #8B6914; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Subject</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E8D9B8; font-size: 15px;">${subject}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #8B6914; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 10px;">Message</p>
              <p style="font-size: 15px; line-height: 1.7; color: #333; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
