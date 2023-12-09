import { TPath } from '@t/data';
import { resolveErrorMessage } from '@utils/api/error/resolveErrorMessage';

export type TFetchReturn<T> = T | null;

export type TFetchConfig = {
  search?: TPath | null;
  base?: string;
  options?: RequestInit;
};
export const useFetchWithBody = <D extends object, V extends object>({
  search,
  base = '',
  options = {},
}: TFetchConfig) => {
  const handler = async (body: V): Promise<TFetchReturn<D>> => {
    let result: TFetchReturn<D> = null;
    let url = base;
    if (!search) return result;
    try {
      url = `${base}${search}`;
      const response = await fetch(url, { ...options, body: JSON.stringify(body) });
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
