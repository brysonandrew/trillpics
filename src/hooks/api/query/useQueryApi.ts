import { useQuery } from '@tanstack/react-query';
import {
  TFetchReturn,
  useFetch,
} from '@hooks/api/query/useFetch';
import { TPath } from '@t/data';
import { resolveApiBase } from '@utils/api/resolveApiBase';

type TQueryOptions<T> = Parameters<
  typeof useQuery<
    Promise<TFetchReturn<T>>,
    any,
    T
  >
>[0];

const OPTIONS: RequestInit = {
  method: 'GET',
};

export const useQueryApi = <
  T extends object,
>(
  search: TPath | null,
  options?: TQueryOptions<T>,
) => {
  const base = resolveApiBase();
  const handleFetch = useFetch<T>({
    search,
    base,
    options: OPTIONS,
  });
  const query = useQuery<
    Promise<TFetchReturn<T>>,
    any,
    T
  >({
    queryKey: [search],
    queryFn: handleFetch,
  });
  return query;
};
