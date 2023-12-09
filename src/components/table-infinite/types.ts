export type TTable<T> = any;

export type TSortEndHandler = (
  prevIndex: number,
  nextIndex: number,
) => void;
export type TPassedHeadProps = {
  onSortEnd?: TSortEndHandler;
};

export type TBaseRow = TBaseFieldValues

export type TBaseCellProps = {
  columnKey: string;
  count: number;
};

export type TBaseColumn = {
  accessorKey: string;
};

import { TBaseFieldValues } from '@components/form/config';
import {
  TChildren,
  TError,
} from '@t/index';
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  UseQueryResult,
} from '@tanstack/react-query';
import { MutableRefObject } from 'react';
import { TInfiniteData } from './hooks/useQueryInfinite';

export type TUseQueryReturn<T> =
  UseQueryResult<T, TError> | null;

export type TPassedHandlerProps = {
  loader?: JSX.Element | null;
};
export type THandlerProps<T> =
  TPassedHandlerProps & {
    query: TUseQueryReturn<T>;
    children(
      data: T,
      query: TUseQueryReturn<T>,
    ): TChildren;
    smallIcon?: boolean;
  };

export type TLoadedMap = Record<
  string,
  boolean
>;
export type TLoadedRef =
  MutableRefObject<TLoadedMap>;

export type TSharedProps = {
  isDisabled: boolean;
  isLoading: boolean;
  onLoad: (
    options?: FetchNextPageOptions,
  ) => Promise<
    InfiniteQueryObserverResult<
      any,
      TError
    >
  >;
  // nextPage: number, nextPageSize: number
};

export type TControlProps =
  TLoadedRefProps &
    TSharedProps & {
      cursor: number;
      onRefetch(): void;
    };

export type TLoadedRefProps = {
  loadedRef: TLoadedRef;
};

export type THandlerInfiniteReturn<T> =
  {
    data: TInfiniteData<T>;
    controlProps: TControlProps;
    loadedRef: TLoadedRef;
  };
