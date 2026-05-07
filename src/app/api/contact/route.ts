import { NextRequest, NextResponse } from "next/server";

const FUB_API_KEY = process.env.FUB_API_KEY || "fka_0aiYKj6ZMMoKmrNIeo0v9p62aCij92NOsN";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, inquiryType, budget, message } = body;

    // Build the person object
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

    // Only add email if provided
    if (email && email.trim()) {
      personData.email = email;
    }

    // Create the person in Follow Up Boss
    const fubResponse = await fetch("https://api.followupboss.com/v1/people", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${FUB_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(personData),
    });

    if (!fubResponse.ok) {
      console.error("Follow Up Boss API error:", await fubResponse.text());
      return NextResponse.json(
        { error: "Failed to submit contact form" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
