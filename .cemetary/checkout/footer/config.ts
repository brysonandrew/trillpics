export const PHONE = '0204 069 8339';
export const PHONE_WITH_TRUNK =
  '+642040698339';
export const EMAIL =
  'andrewbryson12@gmail.com';
export const LINES = [
  {
    title: 'Phone',
    value: PHONE,
    href: 'tel:02040698339',
    iconProps: {
      icon: 'entypo:old-phone',
      width: 14,
      height: 14,
    },
  },
  {
    title: 'Email',
    value: EMAIL,
    href: 'mailto:andrewbryson12@gmail.com',
    iconProps: {
      icon: 'dashicons:email',
    },
  },
] as const;
