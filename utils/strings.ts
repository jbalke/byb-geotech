type Field = 'distance' | 'depth' | 'waterLevel' | 'flowRate';
type FieldInfo = {
  width: number;
  decimals: number;
};

const fieldFormat: Record<Field, FieldInfo> = {
  distance: { width: 12, decimals: 0 },
  depth: { width: 12, decimals: 2 },
  waterLevel: { width: 18, decimals: 2 },
  flowRate: { width: 20, decimals: 2 },
};

export function formatField(
  field: Field,
  value: number | string | undefined
): string {
  let output: string;

  if (typeof value === 'number') {
    if (field === 'waterLevel') {
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
