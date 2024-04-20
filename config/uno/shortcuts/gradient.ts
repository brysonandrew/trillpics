export const GRADIENT = {
  "_net-gradient":
    "dark:_dark-gradient-net _light-gradient-net",
  "_radial-gradient":
    "dark:_dark-radial-gradient _light-radial-gradient",
  "_gradient-border":
    "dark:_dark-gradient-border _light-gradient-border",
  "_gradient-text":
    "dark:_dark-gradient-text _light-gradient-text",
  "bg-fuchsia-pink-rose":
    "bg-gradient-to-r from-fuchsia via-pink to-rose",
  "bg-green-emerald-primary":
    "bg-gradient-to-r from-green via-emerald to-primary",
  "bg-emerald-primary-cyan":
    "bg-gradient-to-r from-emerald via-primary to-cyan",
  "bg-red-orange-amber":
    "bg-gradient-to-r from-red via-orange to-amber",
  "bg-light-lighter":
    "bg-gradient-to-r from-white to-white-9",
  "bg-shade-shadier":
    "bg-gradient-to-r from-gray to-gray-9",
  "bg-dark-darker":
    "bg-gradient-to-r from-black-0 to-black",
  "bg-blue-pink-yellow":
    "bg-gradient-to-r from-blue via-pink to-yellow",
  "bg-pink-blue-yellow":
    "bg-gradient-to-r from-pink via-blue to-yellow",
  "bg-yellow-pink-blue":
    "bg-gradient-to-r from-yellow via-pink to-blue",
  "bg-pink-yellow-blue":
    "bg-gradient-to-r from-pink via-yellow to-blue",
  "bg-blue-yellow-pink":
    "bg-gradient-to-r from-blue via-yellow to-pink",
} as const;

export type TGradientShortcut =
  keyof typeof GRADIENT;
