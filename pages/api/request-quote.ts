import { sendEmail } from 'emails/mailer';
import { NextApiRequest, NextApiResponse } from 'next';
import Mail from 'nodemailer/lib/mailer';
import { EMAIL } from '../../constants';
import { validateHuman } from 'emails/bores/utils';

interface Data {
  name: string;
  email: string;
  phone: string;
  street: string;
  otherSuburb?: string;
  suburb: string;
  service: string;
  comments: string;
}

async function sendQuoteEmail({
  name,
  email,
  phone,
  street,
  suburb,
  otherSuburb,
  service,
  comments,
}: Data) {
  const emailOptions: Mail.Options = {
    to: `${EMAIL.MANAGER}`,
    subject: `Backyard Bores Request for Quote from ${name}`,
    text: `Service: ${service}
Suburb: ${suburb} ${otherSuburb ? `(${otherSuburb})` : ''}
Street: ${street}
Customer: ${name}
Email: ${email}
Phone: ${phone}
Comments: ${comments}`,
  };

  return sendEmail(emailOptions);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { token } = req.body;

    if (!(await validateHuman(token))) {
      res.status(400);
      return res.json({ message: 'recaptcha failed' });
    }

    try {
      const emailRes = await sendQuoteEmail(req.body);

      if (emailRes.messageId) {
        return res.status(200).json({ message: 'message sent' });
      }
    } catch (error) {}

    return res.status(500).json({ message: 'message not sent' });
  }
  return res
    .status(400)
    .json({ message: `Incorrect method: ${req.method}. Did you mean POST?` });
}
