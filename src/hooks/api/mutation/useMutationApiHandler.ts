import { TPath } from '@t/data';
import { useFetchWithBody } from './useFetchWithBody';
import { resolveApiBase } from '@utils/api/resolveApiBase';
import { OPTIONS_INIT } from './config';

export const useMutationApiHandler = <
  D extends object,
  V extends object,
>(
  search: TPath,
  options = OPTIONS_INIT,
) => {
  const base = resolveApiBase();
  const handleFetch = useFetchWithBody<
    D,
    V
  >({ search, base, options });
  return handleFetch;
};
