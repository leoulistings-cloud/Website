import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, inquiryType, budget, message } = body;

    console.log("SMTP_EMAIL:", process.env.SMTP_EMAIL);
    console.log("SMTP_PASSWORD exists:", !!process.env.SMTP_PASSWORD);

    // Send email to Johnny
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    console.log("Transporter created");

    const emailContent = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email || "Not provided"}
Phone: ${phone}
Inquiry Type: ${inquiryType}
Budget: ${budget}

Message:
${message}
    `.trim();

    console.log("Sending email...");
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      subject: `New Contact Form: ${firstName} ${lastName} - ${inquiryType}`,
      text: emailContent,
    });

    console.log("Email sent successfully to", process.env.SMTP_EMAIL);

    // Also try to send to FUB if available (optional bonus)
    const FUB_API_KEY = process.env.FUB_API_KEY;
    if (FUB_API_KEY) {
      try {
        const personData: any = {
          firstName,
          lastName,
          phoneNumber: phone,
          tags: ["website"],
          customFields: {
            inquiryType,
            budget,
            message,
          },
        };

        if (email && email.trim()) {
          personData.email = email;
        }

        const fubResponse = await fetch("https://api.followupboss.com/v1/people", {
          method: "POST",
          headers: {
            "Authorization": `Basic ${Buffer.from(`${FUB_API_KEY}:`).toString("base64")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(personData),
        });

        if (fubResponse.ok) {
          console.log("Contact also sent to Follow Up Boss");
        } else {
          console.log("FUB submission failed but email was sent");
        }
      } catch (fubError) {
        console.log("FUB attempt failed but email was sent:", fubError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form", details: String(error) },
      { status: 500 }
    );
  }
}
