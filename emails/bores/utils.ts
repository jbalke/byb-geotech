import fetch from 'node-fetch';

export function distanceBand(distance: number): string {
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

type Field = 'distance' | 'depth' | 'waterLevel' | 'flowRate' | 'salinity';
type FieldInfo = {
  width: number;
  decimals: number;
};

const fieldFormat: Record<Field, FieldInfo> = {
  distance: { width: 12, decimals: 0 },
  depth: { width: 12, decimals: 2 },
  waterLevel: { width: 18, decimals: 2 },
  flowRate: { width: 20, decimals: 2 },
  salinity: { width: 18, decimals: 0 },
};

export function formatField(
  field: Field,
  value: number | string | undefined
): string {
  let output: string;

  if (typeof value === 'number') {
    if (field === 'waterLevel' && value >= 0) {
      value = -value;
    }
    output = value.toFixed(fieldFormat[field].decimals);
  } else if (typeof value === 'string') {
    output = value;
  } else {
    output = '-';
  }

  return ('' + output).padStart(fieldFormat[field].width, ' ');
}

export async function validateHuman(token: string) {
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
