import { reportNearbyBores } from 'controllers/boreController';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { formatField } from 'utils/strings';
import fetch from 'node-fetch';
import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

const templateSource = fs.readFileSync(
  path.resolve(process.cwd(), 'emails/bores', 'bore-search.hbs'),
  { encoding: 'utf8' }
);
const template = Handlebars.compile(templateSource);

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST!,
  port: parseInt(process.env.MAIL_PORT!),
  auth: {
    user: process.env.MAIL_USER!,
    pass: process.env.MAIL_PASSWORD!,
  },
});

async function sendEmail({ to, subject, html, text }: Mail.Options) {
  const emailOptions: Mail.Options = {
    from: 'dev@example.com',
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

  const obfuscatedBores = bores.map((b) => ({
    ...b,
    distanceBand: distanceBand(b.distance),
  }));

  const boresReportLines = obfuscatedBores.map(
    (b) =>
      `${formatField('distance', b.distanceBand)}${formatField(
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
    bcc: `matthew@vonsnarski.com`,
    subject: 'Bore Search Request',
    text: `Hi ${name},\n
Here's the report you requested on known bores in your area.\n
Address: ${address.label}
Phone: ${phone}\n
BORES (${bores.length})\n
${formatField('distance', 'DISTANCE (m)')}${formatField(
      'depth',
      'DEPTH (m)'
    )}${formatField('waterLevel', 'WATER LEVEL (m)')}${formatField(
      'flowRate',
      'FLOW RATE (L/min)'
    )}
${boresReport}\n\n
Call us on 0418 193 194 for your obligation free quote or just to answer any questions you many have.\n
See our website for information on preparing for a bore.\n
Backyard Bores
https://backyardbores.com
`,
    html: template({
      name,
      address: address.label,
      phone,
      bores: obfuscatedBores,
    }),
  };

  return transporter.sendMail(emailOptions);
}

async function validateHuman(token: string) {
  try {
    const res = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`
    );
    const data = await res.json();
    return data.success;
  } catch (error) {
    return false;
  }
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
