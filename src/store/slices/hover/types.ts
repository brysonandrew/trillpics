import { TStateCreator } from "~/store/types";

export type THoverKey = string | number;

export type THoverState = {
  hoverKeys: THoverKey[];
  isHover: (
    hoverKey: THoverKey
  ) => boolean;
  hover: (hoverKey: THoverKey) => void;
  unhover: (
    hoverKey: THoverKey
  ) => void;
};

export type THoverStateCreator =
  TStateCreator<THoverState>;
