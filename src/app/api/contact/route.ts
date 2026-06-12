import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, inquiryType, budget, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !message) {
      return NextResponse.json(
        { error: "First name, last name, and message are required" },
        { status: 400 }
      );
    }

    console.log("SMTP_EMAIL:", process.env.SMTP_EMAIL);
    console.log("SMTP_PASSWORD exists:", !!process.env.SMTP_PASSWORD);

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

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      subject: `New Contact Form: ${firstName} ${lastName} - ${inquiryType}`,
      text: emailContent,
    });

    console.log("Email sent successfully");

    // Send to Follow Up Boss
    const FUB_API_KEY = process.env.FUB_API_KEY;
    console.log("DEBUG: FUB_API_KEY exists:", !!FUB_API_KEY);
    console.log("DEBUG: FUB_API_KEY length:", FUB_API_KEY?.length || 0);
    if (FUB_API_KEY) {
      console.log("DEBUG: FUB_API_KEY first 10 chars:", FUB_API_KEY.substring(0, 10));
      console.log("DEBUG: FUB_API_KEY last 10 chars:", FUB_API_KEY.substring(FUB_API_KEY.length - 10));
      try {
        const personData: any = {
          firstName,
          lastName,
          tags: ["website"],
        };

        // FUB API uses arrays for emails and phones
        if (email && email.trim()) {
          personData.emails = [{ value: email.trim() }];
        }
        if (phone && phone.trim()) {
          personData.phones = [{ value: phone.trim() }];
        }

        console.log("Sending to FUB:", JSON.stringify(personData));

        const authHeader = `Basic ${Buffer.from(`${FUB_API_KEY}:`).toString("base64")}`;
        console.log("DEBUG: Auth header created, length:", authHeader.length);

        const fubResponse = await fetch("https://api.followupboss.com/v1/people", {
          method: "POST",
          headers: {
            "Authorization": authHeader,
            "Content-Type": "application/json",
            "X-System": process.env.FUB_SYSTEM || "website-contact-form",
            "X-System-Key": process.env.FUB_SYSTEM_KEY || "",
          },
          body: JSON.stringify(personData),
        });

        const fubResponseText = await fubResponse.text();
        console.log("FUB Status:", fubResponse.status);
        console.log("FUB Headers:", JSON.stringify(Object.fromEntries(fubResponse.headers)));
        console.log("FUB Response:", fubResponseText);

        if (!fubResponse.ok) {
          console.error("FUB Error - Status:", fubResponse.status, "Response:", fubResponseText);
        } else {
          console.log("Contact sent to FUB successfully");
        }
      } catch (fubError) {
        console.error("FUB Error:", fubError);
      }
    } else {
      console.warn("WARNING: FUB_API_KEY is not set in environment variables!");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to submit", details: String(error) },
      { status: 500 }
    );
  }
}
