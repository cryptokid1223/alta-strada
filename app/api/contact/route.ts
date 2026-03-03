import { NextResponse } from "next/server";
import { sendContactEmail, type ContactPayload } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    if (
      !body.name ||
      !body.company ||
      !body.specialty ||
      !body.email ||
      !body.message
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    await sendContactEmail({
      name: body.name,
      company: body.company,
      specialty: body.specialty,
      email: body.email,
      phone: body.phone,
      message: body.message
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong while sending your message. Please try again or reach out via email."
      },
      { status: 500 }
    );
  }
}

