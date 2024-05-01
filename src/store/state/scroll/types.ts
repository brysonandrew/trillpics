import { ListOnScrollProps } from "react-window";

export type TScrollUpdateHandler = (
  props: ListOnScrollProps
) => void;
export type TScrollUpdateState = {
  update: TScrollUpdateHandler;
};

export type TScrollState = {
  isScrolling: boolean;
  isScroll: boolean;
  // scroll: TScrollUpdateState 
};
