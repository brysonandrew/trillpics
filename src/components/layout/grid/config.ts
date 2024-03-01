import { TChildren } from '@brysonandrew/config-types';

export const DEFAULT_COL_COUNT = 4;

export type TBox =
  | null
  | false
  | JSX.Element;
export type TBoxes = TBox | TBox[];
export type TBoxSections = TBoxes[];

export type TGridAccumulator = {
  children: TChildren[];
  col: number;
  row: number;
};
