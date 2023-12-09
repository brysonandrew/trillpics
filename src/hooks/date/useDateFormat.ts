import { useDateFormatHandler } from "./useDateFormatHandler";

type TReturn = string;

export const useDateFormat = (date: Date): TReturn => {
  const handler = useDateFormatHandler();
  return handler(date);
};
