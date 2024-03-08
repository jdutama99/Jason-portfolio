'use server';
import { Resend } from 'resend';
import { getErrorMessage } from '../utils/utils';
import ContactFormEmail from '../email/contact-form-email';
import { validateString } from '../utils/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  if (validateString(senderEmail, 200)) {
    return {
      error: 'Invalid email',
    };
  }

  if (validateString(message, 1000)) {
    return {
      error: 'Invalid Message',
    };
  }

  if (validateString(subject, 300)) {
    return {
      error: 'Invalid subject',
    };
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dv>',
      to: 'jasonutama0206@gmail.com',
      subject,
      reply_to: senderEmail,

      react: <ContactFormEmail message={message} senderEmail={senderEmail} />,
    });
  } catch (error) {
    console.log('error:', error);
    // return {
    //   error: getErrorMessage(error),
    // };
  }
};
