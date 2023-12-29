export const GRADIENT = {
  'bg-fuchsia-pink-rose':
    'bg-gradient-to-r from-fuchsia via-pink to-rose',
  'bg-green-emerald-teal':
    'bg-gradient-to-r from-green via-emerald to-teal',
  'bg-emerald-teal-cyan':
    'bg-gradient-to-r from-emerald via-teal to-cyan',
  'bg-red-orange-amber':
    'bg-gradient-to-r from-red via-orange to-amber',
  'bg-light-lighter':
    'bg-gradient-to-r from-white to-white-9',
  'bg-shade-shadier':
    'bg-gradient-to-r from-gray to-gray-9',
  'bg-dark-darker':
    'bg-gradient-to-r from-black-0 to-black',
} as const;

export type TGradientShortcut =
  keyof typeof GRADIENT;
