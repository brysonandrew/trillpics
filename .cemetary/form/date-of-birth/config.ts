
export const DATE_DELIMITER  = '/'
export type TDateDelimiter  = typeof DATE_DELIMITER
export type TDayMonthYear = {day:string, month:TMonthKey, year: string};
export type TDateStr = `${string}${TDateDelimiter}${string}${TDateDelimiter}${number}`
export type TFieldKey = keyof TDayMonthYear;
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export type TMonthTuple  = typeof MONTHS
export type TMonthKey = TMonthTuple[number]
