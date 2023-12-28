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
type TIndex = number;

export type TPendingRecordId =
  `${TName}${TPendingDelimiter}${TColor}${TPendingDelimiter}${TSize}`;
export type TPendingId =
  `${TPendingRecordId}${TPendingDelimiter}${TIndex}`;

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

export type TChosen = TSpecifications &
  TDisplay;
export type TChosens = TChosen[];

export type TPending = TChosen & {
  recordId: TPendingRecordId;
  id: TPendingId;
};
