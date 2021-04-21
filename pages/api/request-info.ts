import { sendEmail } from 'emails/mailer';
import { NextApiRequest, NextApiResponse } from 'next';
import Mail from 'nodemailer/lib/mailer';
import { EMAIL } from '../../constants';

interface RequestInfoEmail {
  name: string;
  email: string;
  phone?: string;
  address: string;
}

async function sendRequestInfoEmail({
  name,
  email,
  address,
  phone,
}: RequestInfoEmail) {
  const emailOptions: Mail.Options = {
    to: `${EMAIL.MANAGER}`,
    subject: 'Bore Request For Information',
    text: `Customer: ${name}
Email: ${email}
Address: ${address}
Phone: ${phone}`,
  };

  return sendEmail(emailOptions);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const emailRes = await sendRequestInfoEmail(req.body);

    if (emailRes.messageId) {
      return res.redirect(303, '/information-request');
    }

    return res.redirect(303, '/contact');
  }
  return res
    .status(400)
    .json({ message: `Incorrect method: ${req.method}. Did you mean POST?` });
}
