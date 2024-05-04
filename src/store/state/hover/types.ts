import { TPicProps } from "~/pics/pic";

export type THoverKey = string | number;
export type THoverPicKey = string;

export type THoverPicState = {
  hoverPicKey: THoverPicKey | null;
  hoverPicProps: TPicProps | null;
  hoverPic: (
    hoverKey: THoverPicKey
  ) => void;
  unhoverPic: (
    hoverKey: THoverPicKey
  ) => void;
};
export type THoverMultiState = {
  hoverKeys: THoverKey[];
  isHover: (
    hoverKey: THoverKey
  ) => boolean;
  hover: (hoverKey?: THoverKey) => void;
  unhover: (
    hoverKey: THoverKey
  ) => void;
};

export type THoverState =
  THoverPicState & THoverMultiState;
