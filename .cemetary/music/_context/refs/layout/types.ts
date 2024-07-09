import { MutableRefObject } from "react";
import { MotionValue } from "framer-motion";
import { PAGE_SCROLL_MODES } from "~/pages/video/music/_context/refs/layout/constants";

export type TRefRecord<
  T extends HTMLElement,
  K extends string = string
> = Record<K, MutableRefObject<T>>;

export type TRefUpdateRecord<
  T extends HTMLElement = HTMLInputElement,
  K extends string = string
> = TRefRecord<T, K>;

export type TInputRefsGraph =
  TRefUpdateRecord<
    HTMLDivElement,
    "sources" | "nodes" | string
  >;
export type TInputRefs = {
  button: TRefUpdateRecord<HTMLButtonElement>;
  number: TRefUpdateRecord;
  slider: TRefUpdateRecord;
  inputs: TRefUpdateRecord<HTMLDivElement>;
  graph: TInputRefsGraph;
};

export type TRefsInputs = TInputRefs & {
  scroll: TScroll;
  update<
    T extends HTMLElement = HTMLInputElement
  >(
    key: keyof TInputRefs,
    name: string,
    instance: T
  ): TRefsInputs;
};

type TPageMode =
  (typeof PAGE_SCROLL_MODES)[number];
export type TScroll =
  MutableRefObject<HTMLDivElement | null> & {
    y: MotionValue<number>;
    modes: readonly TPageMode[];
    modeIndex: number;
  };
