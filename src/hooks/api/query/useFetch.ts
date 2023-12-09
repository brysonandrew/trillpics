import { TPath } from '@t/data';
import { QueryFunctionContext } from '@tanstack/react-query';
import { resolveErrorMessage } from '@utils/api/error/resolveErrorMessage';

export type TFetchReturn<T> = T | null;

export type TFetchConfig = {
  search?: TPath | null;
  base?: string;
  options?: RequestInit;
};
export const useFetch = <T extends object>({ search, base = '', options = {} }: TFetchConfig) => {
  const handler = async (_: QueryFunctionContext): Promise<TFetchReturn<T>> => {
    let result: TFetchReturn<T> = null;
    let url = base;
    if (!search) return result;
    try {
      url = `${base}${search}`;
      const response = await fetch(url, options);
      result = await response.json();
    } catch (error) {
      console.error(url, error);
      resolveErrorMessage(error);
    } finally {
      return result;
    }
  };
  return handler;
};
