import { ListOnScrollProps } from "react-window";

export type TScrollUpdateHandler = (
  props: ListOnScrollProps
) => void;
export type TScrollUpdateState = {
  update: TScrollUpdateHandler;
};

export type TScrollState = {
  isScroll: boolean;
  isScrolling: boolean;
  scrollDirection:
    | "forward"
    | "backward"
    | null;
  scrollDelta: number | null;
};
