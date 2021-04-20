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

export async function sendEmail({ to, subject, html, text }: Mail.Options) {
  const emailOptions: Mail.Options = {
    from: 'dev@example.com',
    to,
    subject,
    html,
    text,
  };

  return transporter.sendMail(emailOptions);
}
