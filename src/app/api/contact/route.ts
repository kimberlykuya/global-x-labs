import { NextResponse } from "next/server";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzepjavd";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, interest, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Submit directly to Formspree endpoint https://formspree.io/f/xzepjavd
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        organization: organization || "N/A",
        interest,
        message,
        _subject: `[GlobalX Inquiry] ${interest} - ${name}`,
        _replyto: email,
      }),
    });

    if (response.ok) {
      return NextResponse.json(
        { success: true, message: "Inquiry successfully submitted to Formspree" },
        { status: 200 }
      );
    } else {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: "Formspree submission failed", details: errorData },
        { status: response.status }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
