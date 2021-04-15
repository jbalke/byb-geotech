import { reportNearbyBores } from 'controllers/boreController';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { formatField } from 'utils/strings';

var transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST!,
  port: parseInt(process.env.MAIL_PORT!),
  auth: {
    user: process.env.MAIL_USER!,
    pass: process.env.MAIL_PASSWORD!,
  },
});

async function sendEmail({ to, subject, html, text }: Mail.Options) {
  const emailOptions: Mail.Options = {
    from: `Dev (do not respond) <dev@example.com>`,
    to,
    subject,
    html,
    text,
  };

  return transporter.sendMail(emailOptions);
}

interface Email {
  name: string;
  email: string;
  phone?: string;
  address: { value: number[]; label: string };
  type: 'search' | 'contact';
}

function distanceBand(distance: number): string {
  switch (true) {
    case distance < 100:
      return '<100m';
    case distance < 200:
      return '100 - 199';
    case distance < 300:
      return '200 - 299';
    case distance < 400:
      return '300 - 399';
    case distance < 500:
      return '400 - 499';
    case distance < 600:
      return '500 - 599';
    case distance < 700:
      return '600 - 699';
    case distance < 800:
      return '700 - 799';
    case distance < 900:
      return '800 - 899';
    case distance < 1000:
      return '900 - 999';
    default:
      return '1000+';
  }
}

async function sendBoreSearchEmail({ name, email, address, phone }: Email) {
  const bores = await reportNearbyBores({
    radius: '1000',
    lng: address.value[0],
    lat: address.value[1],
  });

  const boresReportLines = bores.map(
    (b) =>
      `${formatField('distance', distanceBand(b.distance))}${formatField(
        'depth',
        b.depth
      )}${formatField('waterLevel', b.waterLevel)}${formatField(
        'flowRate',
        b.flowRate
      )}\n`
  );

  let boresReport = '';

  for (let line of boresReportLines) {
    boresReport += line;
  }

  const emailOptions: Mail.Options = {
    to: `${name} - ${email}`,
    subject: 'Bore Search Request',
    text: `Bore Search Request\n
Name: ${name}
Address: ${address.label}
Phone: ${phone}\n
BORES (${bores.length})\n
${formatField('distance', 'DISTANCE (m)')}${formatField(
      'depth',
      'DEPTH (m)'
    )}${formatField('waterLevel', 'WATER LEVEL (m)')}${formatField(
      'flowRate',
      'FLOW RATE (L/Min)'
    )}
${boresReport}`,
  };

  return transporter.sendMail(emailOptions);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    let emailRes;
    switch (req.body.type) {
      case 'search':
        emailRes = await sendBoreSearchEmail(req.body);
        break;
      case 'contact':
        emailRes = await sendEmail(req.body);
        break;
    }

    if (emailRes.messageId) {
      return res.status(200).json({ message: 'Email sent successfully' });
    }

    return res.status(400).json({ message: 'Error sending email' });
  }
  return res
    .status(400)
    .json({ message: `Incorrect method: ${req.method}. Did you mean POST?` });
}
