import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { Resend } from "resend";
import { google } from "googleapis";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

async function appendToGoogleSheet(data: Record<string, string>) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!sheetId) return;

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            data.fullName,
            data.email,
            data.phone || "",
            data.serviceInterest,
            data.message || "",
            data.preferredContact,
          ],
        ],
      },
    });
  } catch (error) {
    console.error("Google Sheets error:", error);
  }
}

function buildWelcomeEmailHtml(data: Record<string, string>) {
  const firstName = data.fullName.split(" ")[0];
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Styltwist</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F0F3F9; font-family: Georgia, 'Times New Roman', serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #F0F3F9; padding: 40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(27, 42, 74, 0.08);">

          <!-- Top Gold Accent Bar -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #C9A84C, #9E7B5F, #C9A84C);"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding: 48px 40px 32px; text-align: center; background-color: #1B2A4A;">
              <p style="margin: 0; font-size: 11px; letter-spacing: 6px; text-transform: uppercase; color: #C9A84C; font-family: 'Courier New', monospace;">Welcome To</p>
              <h1 style="margin: 16px 0 0; font-size: 36px; font-weight: 400; color: #FFFFFF; font-family: Georgia, 'Times New Roman', serif; font-style: italic; letter-spacing: 1px;">
                Styltwist
              </h1>
              <div style="width: 60px; height: 1px; background-color: #C9A84C; margin: 24px auto 0;"></div>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding: 40px 40px 0; text-align: center;">
              <p style="margin: 0; font-size: 14px; letter-spacing: 4px; text-transform: uppercase; color: #C9A84C; font-family: 'Courier New', monospace;">Your Style Journey Begins</p>
              <h2 style="margin: 20px 0 0; font-size: 26px; font-weight: 400; color: #1B2A4A; font-family: Georgia, 'Times New Roman', serif; line-height: 1.4;">
                Thank you, ${firstName}.
              </h2>
              <p style="margin: 16px 0 0; font-size: 16px; color: #4A5568; line-height: 1.7; font-family: system-ui, -apple-system, sans-serif;">
                We're delighted you've chosen Styltwist to elevate your personal style. Your consultation request has been received, and we can't wait to begin crafting a wardrobe experience tailored just for you.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 32px 40px;">
              <div style="height: 1px; background: linear-gradient(90deg, transparent, #C9A84C, transparent);"></div>
            </td>
          </tr>

          <!-- Next Steps -->
          <tr>
            <td style="padding: 0 40px;">
              <p style="margin: 0 0 24px; font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #C9A84C; font-family: 'Courier New', monospace; text-align: center;">What Happens Next</p>

              <!-- Step 1 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td width="48" valign="top">
                    <div style="width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid #C9A84C; text-align: center; line-height: 36px; font-size: 14px; color: #C9A84C; font-family: Georgia, serif;">1</div>
                  </td>
                  <td valign="top" style="padding-left: 12px;">
                    <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1B2A4A; font-family: system-ui, sans-serif;">Personal Consultation Call</p>
                    <p style="margin: 6px 0 0; font-size: 14px; color: #6B7280; line-height: 1.6; font-family: system-ui, sans-serif;">We'll reach out within 24 hours to schedule a one-on-one call to understand your style preferences, lifestyle, and goals.</p>
                  </td>
                </tr>
              </table>

              <!-- Step 2 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td width="48" valign="top">
                    <div style="width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid #C9A84C; text-align: center; line-height: 36px; font-size: 14px; color: #C9A84C; font-family: Georgia, serif;">2</div>
                  </td>
                  <td valign="top" style="padding-left: 12px;">
                    <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1B2A4A; font-family: system-ui, sans-serif;">Curated Style Profile</p>
                    <p style="margin: 6px 0 0; font-size: 14px; color: #6B7280; line-height: 1.6; font-family: system-ui, sans-serif;">Our stylist will create a personalized style profile based on your consultation, identifying key pieces and looks that suit you perfectly.</p>
                  </td>
                </tr>
              </table>

              <!-- Step 3 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td width="48" valign="top">
                    <div style="width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid #C9A84C; text-align: center; line-height: 36px; font-size: 14px; color: #C9A84C; font-family: Georgia, serif;">3</div>
                  </td>
                  <td valign="top" style="padding-left: 12px;">
                    <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1B2A4A; font-family: system-ui, sans-serif;">Your Transformation Begins</p>
                    <p style="margin: 6px 0 0; font-size: 14px; color: #6B7280; line-height: 1.6; font-family: system-ui, sans-serif;">Receive your tailored wardrobe recommendations and start your journey towards effortless, confident style every single day.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="padding: 32px 40px; text-align: center;">
              <a href="https://styltwist.vercel.app/services" style="display: inline-block; padding: 16px 40px; background-color: #1B2A4A; color: #FFFFFF; text-decoration: none; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; font-family: 'Courier New', monospace; border-radius: 9999px;">
                Explore Our Services
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 40px;">
              <div style="height: 1px; background: linear-gradient(90deg, transparent, #C9A84C, transparent);"></div>
            </td>
          </tr>

          <!-- Service Interest Confirmation -->
          <tr>
            <td style="padding: 32px 40px; text-align: center;">
              <p style="margin: 0; font-size: 13px; color: #9CA3AF; font-family: system-ui, sans-serif;">Your interest</p>
              <p style="margin: 8px 0 0; font-size: 16px; color: #1B2A4A; font-family: Georgia, serif; font-style: italic;">${data.serviceInterest}</p>
            </td>
          </tr>

          <!-- Quote Section -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAFAF8; border-radius: 12px; border-left: 3px solid #C9A84C;">
                <tr>
                  <td style="padding: 28px 32px;">
                    <p style="margin: 0; font-size: 16px; color: #1B2A4A; font-family: Georgia, serif; font-style: italic; line-height: 1.7;">
                      "Style is a way to say who you are without having to speak."
                    </p>
                    <p style="margin: 12px 0 0; font-size: 12px; color: #9CA3AF; font-family: system-ui, sans-serif; letter-spacing: 2px; text-transform: uppercase;">— Rachel Zoe</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1B2A4A; padding: 32px 40px; text-align: center;">
              <p style="margin: 0; font-size: 18px; color: #FFFFFF; font-family: Georgia, serif; font-style: italic;">Styltwist</p>
              <p style="margin: 12px 0 0; font-size: 12px; color: #C9A84C; letter-spacing: 2px; text-transform: uppercase; font-family: 'Courier New', monospace;">Elevate Your Wardrobe</p>
              <div style="width: 40px; height: 1px; background-color: #C9A84C; margin: 20px auto;"></div>
              <p style="margin: 0; font-size: 12px; color: #8B95A8; font-family: system-ui, sans-serif; line-height: 1.6;">
                Questions? Reply to this email or reach us at<br />
                <a href="mailto:soumyastyltwist@gmail.com" style="color: #C9A84C; text-decoration: none;">soumyastyltwist@gmail.com</a>
              </p>
              <p style="margin: 16px 0 0; font-size: 11px; color: #5A6478; font-family: system-ui, sans-serif;">
                &copy; ${new Date().getFullYear()} Styltwist. All rights reserved.
              </p>
            </td>
          </tr>

          <!-- Bottom Gold Accent Bar -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #C9A84C, #9E7B5F, #C9A84C);"></td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function sendWelcomeEmail(data: Record<string, string>) {
  try {
    await getResend().emails.send({
      from: "Style Twist <onboarding@resend.dev>",
      to: data.email,
      subject: `Welcome to Styltwist — Your Style Journey Begins ✨`,
      html: buildWelcomeEmailHtml(data),
    });
  } catch (error) {
    console.error("Welcome email error:", error);
  }
}

async function sendNotificationEmail(data: Record<string, string>) {
  try {
    const notificationEmail =
      process.env.NOTIFICATION_EMAIL || "soumyastyltwist@gmail.com";

    await getResend().emails.send({
      from: "Style Twist <onboarding@resend.dev>",
      to: notificationEmail,
      subject: `New Consultation Request from ${data.fullName}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #FFFFFF; color: #1B2A4A; padding: 40px; border-radius: 16px; border: 1px solid #E2E6EF;">
          <h1 style="color: #C9A84C; font-size: 24px; margin-bottom: 24px;">New Consultation Request</h1>
          <div style="background: #F0F3F9; padding: 24px; border-radius: 12px; margin-bottom: 16px;">
            <p><strong style="color: #C9A84C;">Name:</strong> ${data.fullName}</p>
            <p><strong style="color: #C9A84C;">Email:</strong> ${data.email}</p>
            <p><strong style="color: #C9A84C;">Phone:</strong> ${data.phone || "Not provided"}</p>
            <p><strong style="color: #C9A84C;">Service:</strong> ${data.serviceInterest}</p>
            <p><strong style="color: #C9A84C;">Preferred Contact:</strong> ${data.preferredContact}</p>
            ${data.message ? `<p><strong style="color: #C9A84C;">Message:</strong> ${data.message}</p>` : ""}
          </div>
          <p style="color: #666; font-size: 12px;">Sent from Style Twist website</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Email notification error:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    const data = validatedData as unknown as Record<string, string>;

    // Run all in parallel
    await Promise.allSettled([
      appendToGoogleSheet(data),
      sendNotificationEmail(data),
      sendWelcomeEmail(data),
    ]);

    return NextResponse.json(
      { success: true, message: "Thank you! We'll be in touch soon." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: "Validation failed", errors: error },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
