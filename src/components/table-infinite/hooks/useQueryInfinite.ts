import {
  TError,
  TAnyRecord,
} from '@brysonandrew/config-types';
import type {
  InfiniteData,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import { resolveErrorMessage } from '@utils/api/error/resolveErrorMessage';
import { resolveQueryParams } from '@utils/query-params/resolveQueryParams';
import {
  useEffect,
  useRef,
} from 'react';
import {
  DEFAULT_INIT_PAGE,
  DEFAULT_PAGE_SIZE,
} from '../config';

export type TPagination<T> = {
  items: T[];
  headers?: any;
  count: number;
  cursor: number;
};

export type TUseQueryInfiniteReturn<T> =
  UseInfiniteQueryResult<
    TPagination<T> | null,
    TError
  >;
export type TInfiniteData<T> =
  InfiniteData<TPagination<T> | null>;
export type TStatus<T> =
  TUseQueryInfiniteReturn<T>['status'];

export type TFilter = {
  key: string;
  condition: string;
  value: string;
  title?: string;
};

export type TInfiniteQueryParams =
  TAnyRecord & {
    page?: number;
    pageSize?: number;
    filters?: TFilter[];
    sort?: string;
    direction?: 'asc' | 'desc';
    search?: string;
  };

type TConfig<T> =
  TInfiniteQueryParams & {
    keys: (string | T)[];
    isSkip?: boolean;
    onFetch(nextQuery: string): any;
  };
export const useQueryInfinite = <T>({
  page = DEFAULT_INIT_PAGE,
  pageSize = DEFAULT_PAGE_SIZE,
  filters = [],
  keys,
  isSkip,
  onFetch,
  ...remainingParams
}: TConfig<T>): TUseQueryInfiniteReturn<T> => {
  const paramKeyRef = useRef<
    string | null
  >(null);

  const initPageParams = {
    page,
    pageSize,
  };

  const filterParams = {
    ...(filters.length > 0
      ? {
          filters:
            JSON.stringify(filters),
        }
      : {}),
    ...remainingParams,
  };
  const queryKey = [
    ...keys,
    JSON.stringify(filterParams),
  ];
  const queryKeyString =
    queryKey.toString();

  const params = {
    ...initPageParams,
    ...filterParams,
  };
  const currentRef = useRef(params);
  currentRef.current = params;

  useEffect(() => {
    if (paramKeyRef.current) {
      if (
        typeof window !== 'undefined'
      ) {
        // window.scrollTo(0, 0); TODO make a switch for this
      }
    }
    paramKeyRef.current =
      queryKeyString;
  }, [queryKeyString]);

  const queryFn = async ({
    pageParam = currentRef.current
      .page ?? 1,
  }) => {
    const {
      pageSize: size,
      page: initPage,
      ...restParams
    } = currentRef.current;
    const cursor = pageParam;
    const nextQuery = {
      ...restParams,
      page: cursor,
      page_size: size,
    };

    const nextParams =
      resolveQueryParams(nextQuery);

    try {
      const response = await onFetch(
        nextParams,
      );

      return { ...response, cursor };
    } catch (error: TError) {
      resolveErrorMessage(error);
      return null;
    }
  };

  const result = useInfiniteQuery({
    queryKey,
    queryFn,
    enabled: !isSkip,
    getNextPageParam: (
      lastPage: TPagination<T> | null,
    ) => {
      if (!lastPage) return 1;
      const next = lastPage.cursor + 1;
      const maxCount =
        ~~(
          lastPage.count /
          currentRef.current.pageSize
        ) + 1;
      const hasNextPage =
        next <= maxCount;
      if (hasNextPage) {
        return next;
      }
    },
  } as any);

  return result as any;
};
