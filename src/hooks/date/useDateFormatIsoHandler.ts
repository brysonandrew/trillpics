import type {
  TDateFormatOptions} from "./useDateFormatHandler";
import {
  useDateFormatHandler,
} from "./useDateFormatHandler";

type TReturn = string;

export const useDateFormatIsoHandler = (
  options?: TDateFormatOptions
): ((iso: string) => TReturn) => {
  const handler = useDateFormatHandler(options);
  return (iso: string): TReturn => {
    if (iso) {
      const date = new Date(iso);
      const result: string = handler(date);
      return result;
    } else {
      return "";
    }
  };
};
