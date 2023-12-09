import { useDateFormatIsoHandler } from "./useDateFormatIsoHandler";

type TReturn = string;

export const useDateFormatIso = (iso: string): TReturn => {
  const handler = useDateFormatIsoHandler();
  return handler(iso);
};
// const date = new Date('2014-07-04');
// const dateTimeFormat = new Intl.DateTimeFormat('en', {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// });