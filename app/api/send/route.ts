import { EmailTemplate } from "@/app/components/misc/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const json = await req.json();

    const { data, error } = await resend.emails.send({
      from: "contato@borderlesscoding.com",
      to: "contato@borderlesscoding.com",
      subject: `Contact from borderless website by ${json.name}`,
      replyTo: json.email,
      react: EmailTemplate({
        email: json.email,
        name: json.name,
        topic: json.topic,
        message: json.message,
      }),
    });

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
