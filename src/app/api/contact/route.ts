import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, inquiryType, budget, message } = body;

    console.log("SMTP_EMAIL:", process.env.SMTP_EMAIL);
    console.log("SMTP_PASSWORD exists:", !!process.env.SMTP_PASSWORD);
    console.log("FUB_API_KEY exists:", !!process.env.FUB_API_KEY);

    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
      throw new Error("SMTP credentials not configured");
    }

    // Send email to Johnny
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD.trim(),
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

    // Send to Follow Up Boss
    const FUB_API_KEY = process.env.FUB_API_KEY;
    console.log("DEBUG: FUB_API_KEY is set:", !!FUB_API_KEY);
    console.log("DEBUG: FUB_API_KEY first 10 chars:", FUB_API_KEY ? FUB_API_KEY.substring(0, 10) : "NOT SET");

    if (FUB_API_KEY) {
      try {
        const personData: any = {
          firstName,
          lastName,
          mobilePhone: phone,
          emailAddress: email,
        };

        console.log("FUB API Key length:", FUB_API_KEY.length);
        console.log("Sending to Follow Up Boss with data:", JSON.stringify(personData, null, 2));

        const fubResponse = await fetch("https://api.followupboss.com/v1/people", {
          method: "POST",
          headers: {
            "Authorization": `Basic ${Buffer.from(`${FUB_API_KEY}:`).toString("base64")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(personData),
        });

        const fubResponseText = await fubResponse.text();
        console.log("FUB Response Status:", fubResponse.status);
        console.log("FUB Response Body:", fubResponseText);

        if (!fubResponse.ok) {
          console.error("Follow Up Boss API error:", {
            status: fubResponse.status,
            body: fubResponseText,
            request: personData,
          });
        } else {
          console.log("Contact successfully sent to Follow Up Boss");
        }
      } catch (fubError) {
        console.error("FUB attempt failed:", fubError);
      }
    } else {
      console.warn("FUB_API_KEY not set - skipping Follow Up Boss integration");
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
