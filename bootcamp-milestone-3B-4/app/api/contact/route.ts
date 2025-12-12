import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // DEBUG: make sure env vars are actually defined
    console.log("EMAILJS_SERVICE_ID", process.env.EMAILJS_SERVICE_ID);
    console.log("EMAILJS_TEMPLATE_ID", process.env.EMAILJS_TEMPLATE_ID);
    console.log("EMAILJS_PUBLIC_KEY", process.env.EMAILJS_PUBLIC_KEY);

    const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY, // public key from EmailJS
        template_params: {
          from_name: name,
          reply_to: email,
          message: message,
        },
      }),
    });

    const emailText = await emailRes.text();
    console.log("EMAILJS RESPONSE STATUS:", emailRes.status);
    console.log("EMAILJS RESPONSE BODY:", emailText);

    if (!emailRes.ok) {
      return NextResponse.json(
        { error: `EmailJS failed: ${emailText || "Unknown error"}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return NextResponse.json(
      { error: "Unexpected error sending email." },
      { status: 500 }
    );
  }
}
