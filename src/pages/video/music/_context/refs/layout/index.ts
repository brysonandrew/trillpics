import { useMemo } from "react";
import { useMotionValue } from "framer-motion";
import { TRefRecord } from "~/pages/video/music/_context/refs/types";
import { PAGE_SCROLL_MODES } from "~/pages/video/music/_context/refs/layout/constants";
import { TScroll } from "~/pages/video/music/_context/refs/layout/types";

type TRefUpdateRecord<
  T extends HTMLElement = HTMLInputElement,
  K extends string = string
> = TRefRecord<T, K>;
type TGraph = TRefUpdateRecord<
  HTMLDivElement,
  "sources" | "nodes" | string
>;
type TInputRefs = {
  button: TRefUpdateRecord<HTMLButtonElement>;
  number: TRefUpdateRecord;
  slider: TRefUpdateRecord;
  inputs: TRefUpdateRecord<HTMLDivElement>;
  graph: TGraph;
};

type TRefsInputs = TInputRefs & {
  scroll: TScroll;
  update<
    T extends HTMLElement = HTMLInputElement
  >(
    key: keyof TInputRefs,
    name: string,
    instance: T
  ): TRefsInputs;
};
export const useRefsLayout = () => {
  const scrollY = useMotionValue(0);

  const layout =
    useMemo<TRefsInputs>(() => {
      const graph: TGraph = {};
      const scroll: TScroll = {
        current: null,
        y: scrollY,
        modes: PAGE_SCROLL_MODES,
        modeIndex: 0,
      };
      const inputRefsCreator = {
        button: {},
        number: {},
        slider: {},
        inputs: {},
        graph,
        update: function <
          T extends HTMLElement
        >(
          key: keyof TInputRefs,
          name: string,
          instance: T | null
        ) {
          if (!this[key][name]) {
            this[key][name] = {
              current: instance,
            };
          } else {
            this[key][name].current =
              instance;
          }

          return this;
        },
      } as const;

      return {
        scroll,
        ...inputRefsCreator,
      } as const;
    }, []);
  return layout;
};
// set create(
//   self: TInputRefs,
//   instance: HTMLInputElement,
//   key: keyof TInputRefs,
//   name: string
// ) {
//           if (!self[key][name]) {
//     self[key][name] = {
//       current: null,
//     };
//   }
//   self[key][name].current =
//     instance;
//     }

// },
// slider: {
//   set _create(
//     instance: HTMLInputElement
//   ) {
//     return create(
//       this.self,
//       "slider"
//     );
//   },
// },
// get instanceFn(name:string) {
//   return self.number.name(name).instance
// },
// get nameFn(name:string) {
//   return self.number.name(name).instance
// },
