import { DATE_DELIMITER, MONTHS, TDateStr, TDayMonthYear } from './config';

export const resolveDateStr = ({ day, month, year }: TDayMonthYear): TDateStr => {
  return `${day.padStart(2, '0')}${DATE_DELIMITER}${(MONTHS.indexOf(month) + 1)
    .toString()
    .padStart(2, '0')}${DATE_DELIMITER}${Number(year)}`;
};
