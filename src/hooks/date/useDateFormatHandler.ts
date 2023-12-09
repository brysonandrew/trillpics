import { useLocales } from "./useLocales";

export type TDateFormatOptions = Intl.DateTimeFormatOptions;

type TReturn = string;

export const useDateFormatHandler = (
  options?: TDateFormatOptions
): ((date: Date) => TReturn) => {
  const handleLocale = useLocales();
  const handler = (date: Date): TReturn => {
    if (date) {
      const locale = handleLocale();
      const dateTimeFormat = new Intl.DateTimeFormat(
        locale ?? "au",
        options ?? {
          dateStyle: "long",
          timeStyle: "long",
        }
      );
      return dateTimeFormat.format(date);
    } else {
      return "";
    }
  };
  return handler;
};
