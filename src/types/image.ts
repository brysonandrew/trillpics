import {
  SIZES,
  COLORS,
  PENDING_DELIMITER,
} from '@constants/images';

export type TName = string;
export type TSrc = string;
export type TPath = string;

export type TSize =
  (typeof SIZES)[number];

export type TColor =
  (typeof COLORS)[number];

export type TPendingDelimiter =
  typeof PENDING_DELIMITER;
export type TItem =
  `${TName}${TPendingDelimiter}${TColor}${TPendingDelimiter}${TSize}`;
export type TPendingId =
  `${TName}${TPendingDelimiter}`;

export type TSpecifications = {
  size: TSize;
  color: TColor;
};

export type TResolver =
  () => Promise<unknown>;

export type TInit = {
  name: TName;
  path: TPath;
  resolver: TResolver;
};

export type TDisplay = {
  name: TName;
  src: TSrc;
};

export type TPending = TSpecifications &
  TDisplay & {
    id: TPendingId;
  };
