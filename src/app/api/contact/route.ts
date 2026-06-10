import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  let fubError: string | null = null;

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
          fubError = `FUB API Error (${fubResponse.status}): ${fubText}`;
          console.log("❌ FUB sync failed:", fubError);
        }
      } catch (fubErrorObj) {
        fubError = `FUB Error: ${fubErrorObj instanceof Error ? fubErrorObj.message : String(fubErrorObj)}`;
        console.log("❌ FUB error:", fubError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      fubStatus: fubError ? `FUB Sync Failed: ${fubError}` : "Synced to FUB"
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form", details: String(error) },
      { status: 500 }
    );
  }
}
