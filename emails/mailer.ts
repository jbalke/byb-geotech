import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST!,
  port: parseInt(process.env.MAIL_PORT!),
  auth: {
    user: process.env.MAIL_USER!,
    pass: process.env.MAIL_PASSWORD!,
  },
});

export async function sendEmail(options: Mail.Options) {
  const emailOptions: Mail.Options = {
    ...options,
  };

  return transporter.sendMail(emailOptions);
}
