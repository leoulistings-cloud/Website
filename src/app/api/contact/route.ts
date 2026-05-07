import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, inquiryType, budget, message } = body;

    const FUB_API_KEY = process.env.FUB_API_KEY;

    if (!FUB_API_KEY) {
      console.error("FUB_API_KEY environment variable is not set");
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

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

    console.log("Submitting to FUB:", JSON.stringify(personData));

    // Create the person in Follow Up Boss
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
      console.error("Follow Up Boss API error:", fubResponseText);
      return NextResponse.json(
        { error: "Failed to submit contact form", details: fubResponseText },
        { status: fubResponse.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}
