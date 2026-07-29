import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, inquiryType, budget, message } = body;

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
    const FUB_SYSTEM = process.env.FUB_SYSTEM || "website-contact-form";
    const FUB_SYSTEM_KEY = process.env.FUB_SYSTEM_KEY || "";

    if (FUB_API_KEY) {
      try {
        const fubHeaders = {
          "Authorization": `Basic ${Buffer.from(`${FUB_API_KEY}:`).toString("base64")}`,
          "Content-Type": "application/json",
          "X-System": FUB_SYSTEM,
          "X-System-Key": FUB_SYSTEM_KEY,
        };

        // Step 1: Create person with contact details
        const personData = {
          firstName,
          lastName,
          tags: ["website"],
          emails: email ? [{ value: email }] : [],
          phones: phone ? [{ value: phone }] : [],
        };

        console.log("Sending to FUB with data:", JSON.stringify(personData));

        const fubResponse = await fetch("https://api.followupboss.com/v1/people", {
          method: "POST",
          headers: fubHeaders,
          body: JSON.stringify(personData),
        });

        const fubResponseText = await fubResponse.text();
        console.log("FUB Status:", fubResponse.status);
        console.log("FUB Response:", fubResponseText);

        if (fubResponse.ok) {
          try {
            const personResponse = JSON.parse(fubResponseText);
            const personId = personResponse.id;

            // Step 2: Add inquiry details as note
            if (personId) {
              const noteData = {
                text: `Inquiry Type: ${inquiryType}\nBudget: ${budget}\n\nMessage:\n${message}`,
              };

              await fetch(`https://api.followupboss.com/v1/people/${personId}/notes`, {
                method: "POST",
                headers: fubHeaders,
                body: JSON.stringify(noteData),
              });

              console.log("Note added to FUB contact");
            }

            console.log("Contact sent to FUB successfully");
          } catch (parseError) {
            console.error("FUB Response parse error:", parseError);
          }
        } else {
          console.error("FUB Error:", fubResponseText);
        }
      } catch (fubError) {
        console.error("FUB Error:", fubError);
      }
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
