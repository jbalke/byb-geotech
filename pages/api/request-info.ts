import { sendEmail } from 'emails/mailer';
import { NextApiRequest, NextApiResponse } from 'next';
import Mail from 'nodemailer/lib/mailer';

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
    to: `matthew@vonsnarski.com`,
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
    //TODO: redirect to website instead of json response
    const emailRes = await sendRequestInfoEmail(req.body);
    if (emailRes.messageId) {
      return res.status(200).json({ message: 'Email sent successfully' });
    }

    return res.status(400).json({ message: 'Error sending email' });
  }
  return res
    .status(400)
    .json({ message: `Incorrect method: ${req.method}. Did you mean POST?` });
}
