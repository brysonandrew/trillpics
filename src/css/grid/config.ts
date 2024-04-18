import { TBreakpointKey } from '~/uno/index';

export type TCell<K extends string> =
  | K
  | [key: K, colSpan: number];

export type TGrid<K extends string> =
  readonly TCell<K>[][];

export type TGridRecordKey =
  | TBreakpointKey
  | '';

type TFullGridRecord<K extends string> =
   Record<TGridRecordKey, TGrid<K>>;

export type TGridRecord<
  K extends string,
> = Partial<TFullGridRecord<K>>;

export type TEntry<K extends string> =
  readonly [
    TGridRecordKey,
    TGridRecord<K>,
  ];

export type TEntries<K extends string> =
  TEntry<K>;

export const BASE_CSS = `
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  width: 100%;
`;
