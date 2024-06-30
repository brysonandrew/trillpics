import { useMemo } from "react";
import { useMotionValue } from "framer-motion";
import { PAGE_SCROLL_MODES } from "~/pages/video/music/_context/init/constants";
import {
  TRefRecord,
  TScroll,
} from "~/pages/video/music/_context/init/types";

type TRefUpdateRecord<T extends HTMLElement = HTMLInputElement> =
  TRefRecord<T>;

type TInputRefs = {
  number: TRefUpdateRecord;
  slider: TRefUpdateRecord;
  inputs: TRefUpdateRecord<HTMLDivElement>
};

type TRefsInputs = TInputRefs & {
  scroll: TScroll;
  update<T extends HTMLElement = HTMLInputElement>(
    key: keyof TInputRefs,
    name: string,
    instance: T
  ): TRefsInputs;
};
export const useRefsLayout = () => {
  const scrollY = useMotionValue(0);

  const layout =
    useMemo<TRefsInputs>(() => {
      const scroll: TScroll = {
        current: null,
        y: scrollY,
        modes: PAGE_SCROLL_MODES,
        modeIndex: 0,
      };
      const inputRefsCreator = {
        number: {},
        slider: {},
        inputs:{},
        update: function <T extends HTMLElement>(
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
