import { MONTHS, TDayMonthYear } from './config';

export const resolveCurrDate = ({ year, month, day }: TDayMonthYear) => {
  return new Date(Number(year), MONTHS.indexOf(month), Number(day));
};
