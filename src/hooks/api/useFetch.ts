import { TPath } from '@t/data';
import { resolveErrorMessage } from '@utils/api/error/resolveErrorMessage';

export type TFetchReturn<T> = T | null;

export type TFetchConfig = {
  search?: TPath | null;
  base?: string;
  options?: RequestInit;
};
export const useFetch = <
  T extends object,
  V extends object | void,
>({
  search,
  base = '',
  options = {},
}: TFetchConfig) => {
  const handler = async (
    body?: V,
  ): Promise<TFetchReturn<T>> => {
    let optionsHandler = {};
    if (body && !(body as any).queryKey) {
      optionsHandler = {
        ...optionsHandler,
        body: JSON.stringify(body),
      };
    }
    let result: TFetchReturn<T> = null;
    let url = base;
    if (!search) return result;
    try {
      url = `${base}${search}`;
      const response = await fetch(
        url,
        {
          ...optionsHandler,
          ...options,
        },
      );
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
