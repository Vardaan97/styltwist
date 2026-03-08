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

async function sendNotificationEmail(data: Record<string, string>) {
  try {
    const notificationEmail =
      process.env.NOTIFICATION_EMAIL || "soumyastylwist@gmail.com";

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

    // Run both in parallel
    await Promise.allSettled([
      appendToGoogleSheet(data),
      sendNotificationEmail(data),
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
