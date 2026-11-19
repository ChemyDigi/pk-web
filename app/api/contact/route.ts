import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, name, mobileNumber, phone, email, subject, message } =
      body;

    const senderName = (firstName || name || "").trim();
    const senderEmail = (email || "").trim();
    const senderPhone = (mobileNumber || phone || "").trim();
    const senderMessage = (message || "").trim();
    const senderSubject = (subject || "").trim();

    if (!senderName) {
      return NextResponse.json(
        { success: false, error: "Please enter your name." },
        { status: 400 }
      );
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

    if (!senderEmail || !emailRegex.test(senderEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!senderMessage) {
      return NextResponse.json(
        { success: false, error: "Please enter your message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
    const toEmail = process.env.CLIENT_EMAIL;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY in environment variables.");
      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured (missing RESEND_API_KEY).",
        },
        { status: 500 }
      );
    }

    if (!toEmail) {
      console.error("Missing CLIENT_EMAIL in environment variables.");
      return NextResponse.json(
        {
          success: false,
          error: "Recipient email is not configured (missing CLIENT_EMAIL).",
        },
        { status: 500 }
      );
    }

    const emailSubject =
      senderSubject || `New Contact Form Message from ${senderName}`;

    // Clean, modern HTML email template
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(emailSubject)}</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f4f5; color: #18181b;">
  <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #e4e4e7;">
    <div style="background-color: #08080a; padding: 24px; text-align: center; border-bottom: 2px solid #e56e2a;">
      <h1 style="margin: 0; font-size: 20px; font-weight: 600; color: #ffffff; letter-spacing: 0.02em;">
        New Contact Inquiry
      </h1>
      <p style="margin: 6px 0 0; font-size: 13px; color: #a1a1aa;">
        Received from your portfolio website
      </p>
    </div>

    <div style="padding: 28px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-size: 13px; font-weight: 600; color: #71717a; width: 130px;">Name:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-size: 14px; font-weight: 600; color: #18181b;">${escapeHtml(
            senderName
          )}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-size: 13px; font-weight: 600; color: #71717a;">Email:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-size: 14px; color: #18181b;">
            <a href="mailto:${escapeHtml(
              senderEmail
            )}" style="color: #2563eb; text-decoration: none;">${escapeHtml(
      senderEmail
    )}</a>
          </td>
        </tr>
        ${
          senderPhone
            ? `<tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-size: 13px; font-weight: 600; color: #71717a;">Mobile / Phone:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f4f4f5; font-size: 14px; color: #18181b;">
            <a href="tel:${escapeHtml(
              senderPhone
            )}" style="color: #18181b; text-decoration: none;">${escapeHtml(
                senderPhone
              )}</a>
          </td>
        </tr>`
            : ""
        }
      </table>

      <div style="margin-top: 16px;">
        <p style="margin: 0 0 8px; font-size: 13px; font-weight: 600; color: #71717a; text-transform: uppercase; letter-spacing: 0.05em;">Message:</p>
        <div style="background-color: #fafafa; border: 1px solid #e4e4e7; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #27272a; white-space: pre-wrap;">${escapeHtml(
          senderMessage
        )}</div>
      </div>
    </div>

    <div style="background-color: #fafafa; padding: 16px 24px; text-align: center; border-top: 1px solid #f4f4f5; font-size: 12px; color: #a1a1aa;">
      You can reply directly to this email to connect with ${escapeHtml(
        senderName
      )} (${escapeHtml(senderEmail)}).
    </div>
  </div>
</body>
</html>
`;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: senderEmail,
        subject: emailSubject,
        html: htmlContent,
      }),
    });

    const resData = await resendRes.json();

    if (!resendRes.ok) {
      console.error("Resend API error:", resData);
      let errorMsg = resData.message || "Failed to send email via Resend.";
      if (
        resData.statusCode === 403 &&
        typeof resData.message === "string" &&
        resData.message.toLowerCase().includes("domain")
      ) {
        errorMsg = `The domain in RESEND_FROM_EMAIL is not verified in Resend. Please verify your domain in Resend or set RESEND_FROM_EMAIL to 'onboarding@resend.dev' for testing.`;
      }
      return NextResponse.json(
        { success: false, error: errorMsg },
        { status: resendRes.status || 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      id: resData.id,
    });
  } catch (error: any) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "An unexpected error occurred while sending.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
