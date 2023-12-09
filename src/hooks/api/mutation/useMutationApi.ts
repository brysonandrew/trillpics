import { useMutation } from '@tanstack/react-query';
import {
  TFetchReturn,
  useFetch,
} from '@hooks/api/useFetch';
import { TPath } from '@t/data';
import { TError } from '@t/index';
import { resolveApiBase } from '@utils/api/resolveApiBase';
import { OPTIONS_INIT } from './config';

export const useMutationApi = <
  T extends object,
  V extends object | void,
>(
  search: TPath,
  options = OPTIONS_INIT,
) => {
  const base = resolveApiBase();

  const handleFetch = useFetch<T, V>({
    search,
    base,
    options,
  });
  const mutation = useMutation<
    TFetchReturn<T>,
    TError,
    V
  >({
    mutationKey: [search],
    onMutate: handleFetch,
  });
  return mutation;
};
