import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { EMAIL } from '../constants';

let mailConfig;
if (process.env.NODE_ENV === 'production') {
  mailConfig = {
    host: process.env.MAIL_HOST!,
    port: parseInt(process.env.MAIL_PORT!),
    secure: true,
    auth: {
      user: process.env.MAIL_USER!,
      pass: process.env.MAIL_PASSWORD!,
    },
  };
} else {
  mailConfig = {
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '88bf6901e4163c',
      pass: 'd34f21ffbe398c',
    },
    logger: true,
  };
}

const transporter = nodemailer.createTransport(mailConfig);

export async function sendEmail(options: Mail.Options) {
  const emailOptions: Mail.Options = {
    from: { name: 'Website', address: EMAIL.INFO },
    ...options,
  };

  return transporter.sendMail(emailOptions);
}
