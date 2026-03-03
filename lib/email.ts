import { Resend } from "resend";
import { COMPANY } from "@/lib/constants";

const resendApiKey = process.env.RESEND_API_KEY;
const contactRecipient = process.env.CONTACT_RECIPIENT_EMAIL ?? COMPANY.email;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export type ContactPayload = {
  name: string;
  company: string;
  specialty: string;
  email: string;
  phone?: string;
  message: string;
};

export async function sendContactEmail(payload: ContactPayload) {
  if (!resend || !contactRecipient) {
    throw new Error("Email service is not configured.");
  }

  const subject = `New inquiry from ${payload.name} (${payload.specialty})`;

  const lines = [
    `Name: ${payload.name}`,
    `Practice / Company: ${payload.company}`,
    `Specialty: ${payload.specialty}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    "",
    "Message:",
    payload.message
  ];

  await resend.emails.send({
    from: `Alta Strada Website <no-reply@${new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://altastradaconsulting.com"
    ).hostname}>`,
    to: [contactRecipient],
    subject,
    text: lines.join("\n")
  });
}

