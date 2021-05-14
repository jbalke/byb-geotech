import { reportNearbyBores } from 'model/bore';
import { distanceBand, formatField, validateHuman } from 'emails/bores/utils';
import { sendEmail } from 'emails/mailer';
import fs from 'fs';
import Handlebars from 'handlebars';
import { NextApiRequest, NextApiResponse } from 'next';
import Mail from 'nodemailer/lib/mailer';
import path from 'path';
import { EMAIL } from '../../../constants';

const templateSource = fs.readFileSync(
  path.resolve(process.cwd(), 'emails/bores', 'bore-search.hbs'),
  { encoding: 'utf8' }
);
const template = Handlebars.compile(templateSource);

interface BoreSearchEmail {
  name: string;
  email: string;
  phone?: string;
  address: { value: number[]; label: string };
}

async function sendBoreSearchEmail({
  name,
  email,
  address,
  phone,
}: BoreSearchEmail) {
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
      )}${formatField('salinity', b.salinity)}\n`
  );

  let boresReport = '';

  for (let line of boresReportLines) {
    boresReport += line;
  }

  const emailOptions: Mail.Options = {
    from: { name: 'Backyard Bores', address: EMAIL.INFO },
    to: `${email}`,
    replyTo: `${EMAIL.SALES}`,
    bcc: `${EMAIL.INFO}`,
    subject: `Backyard Bores Search at ${address.label}`,
    text: `Hi ${name},\n
Here's the report you requested on known bores in your area.\n
Address: ${address.label}
Phone: ${phone}\n
${formatField('distance', 'DISTANCE (m)')}${formatField(
      'depth',
      'DEPTH (m)'
    )}${formatField('waterLevel', 'WATER LEVEL (m)')}${formatField(
      'flowRate',
      'FLOW RATE (L/min)'
    )}${formatField('salinity', 'SALINITY (PPM)')}
${boresReport}\n\n
Call us on 0418 193 194 for your obligation free quote or just to answer any questions you many have.\n
See our website for information on preparing for a bore.\n
Backyard Bores
https://backyardbores.com
`,
    html: template({
      name,
      address: address.label,
      email,
      phone,
      bores: obfuscatedBores,
      siteUrl: process.env.NEXT_PUBLIC_VERCEL_URL,
    }),
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

    const emailRes = await sendBoreSearchEmail(req.body);
    if (emailRes.messageId) {
      return res.status(200).json({ message: 'Email sent successfully' });
    }

    return res.status(400).json({ message: 'Error sending email' });
  }
  return res
    .status(400)
    .json({ message: `Incorrect method: ${req.method}. Did you mean POST?` });
}
