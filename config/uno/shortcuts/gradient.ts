export const GRADIENT = {
  'bg-fuchsia-pink-rose':
    'bg-gradient-to-r from-fuchsia via-pink to-rose',
  'bg-green-emerald-teal':
    'bg-gradient-to-r from-green via-emerald to-teal',
  'bg-emerald-teal-cyan':
    'bg-gradient-to-r from-emerald via-teal to-cyan',
} as const;

export type TGradientShortcut =
  keyof typeof GRADIENT;
