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
    if (FUB_API_KEY) {
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

        const fubResponse = await fetch("https://api.followupboss.com/v1/people", {
          method: "POST",
          headers: {
            "Authorization": `Basic ${Buffer.from(`${FUB_API_KEY}:`).toString("base64")}`,
            "Content-Type": "application/json",
            "X-System": process.env.FUB_SYSTEM || "website-contact-form",
            "X-System-Key": process.env.FUB_SYSTEM_KEY || "",
          },
          body: JSON.stringify(personData),
        });

        const fubText = await fubResponse.text();
        console.log("FUB Response Status:", fubResponse.status);
        console.log("FUB Response:", fubText);

        if (fubResponse.ok) {
          const fubData = JSON.parse(fubText);
          const personId = fubData.data?.id;
          console.log("✅ Contact synced to Follow Up Boss with 'website' tag, ID:", personId);

          // Add note with inquiry details
          if (personId) {
            try {
              const noteContent = `Inquiry Type: ${inquiryType}\nBudget: ${budget}\n\nMessage:\n${message}`;
              const noteResponse = await fetch(`https://api.followupboss.com/v1/people/${personId}/notes`, {
                method: "POST",
                headers: {
                  "Authorization": `Basic ${Buffer.from(`${FUB_API_KEY}:`).toString("base64")}`,
                  "Content-Type": "application/json",
                  "X-System": process.env.FUB_SYSTEM || "website-contact-form",
                  "X-System-Key": process.env.FUB_SYSTEM_KEY || "",
                },
                body: JSON.stringify({ text: noteContent }),
              });

              if (noteResponse.ok) {
                console.log("✅ Note added to contact");
              } else {
                console.log("⚠️ Note failed but contact was created");
              }
            } catch (noteError) {
              console.log("⚠️ Note error but contact was created:", noteError);
            }
          }
        } else {
          console.log("❌ FUB sync failed:", fubText);
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
