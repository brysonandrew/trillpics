import { getParsedSearchParam } from '@utils/params/getParsedSearchParam';
import { useSearchParams } from 'react-router-dom';

export const useParams = <K extends string>(...paramKeys: readonly K[]) => {
  const [searchParams] = useSearchParams();
  const result: Partial<Record<K, string>> = paramKeys.reduce((a, key) => {
    if (searchParams.has(key) && searchParams.get(key) !== null) {
      return { ...a, [key]: getParsedSearchParam(key, searchParams) };
    }
    return a;
  }, {});
  return result;
};
