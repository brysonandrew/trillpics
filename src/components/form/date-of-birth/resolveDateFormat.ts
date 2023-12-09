export const resolveDateFormat = (
  date: Date,
) => {
  return new Intl.DateTimeFormat('au', {
    dateStyle: 'long',
    timeStyle: 'short',
    dayPeriod: 'narrow'
  }).format(date);
};
