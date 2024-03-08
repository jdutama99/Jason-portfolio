// app/api/send/route.js

import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import ContactFormEmail from '@/lib/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'jasonutama0206@gmail.com',
      subject,
      reply_to: email,

      react: <ContactFormEmail message={message} senderEmail={email} />,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
