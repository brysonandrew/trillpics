import { useMemo } from "react";
import { useMotionValue } from "framer-motion";
import { PAGE_SCROLL_MODES } from "~/pages/video/music/_context/init/constants";
import {
  TRefRecord,
  TScroll,
} from "~/pages/video/music/_context/init/types";

type TRefUpdateRecord =
  TRefRecord<HTMLInputElement>;

type TInputRefs = {
  number: TRefUpdateRecord;
  slider: TRefUpdateRecord;
};

type TRefsInputs = TInputRefs & {
  scroll: TScroll;
  update(
    key: keyof TInputRefs,
    name: string,
    instance: HTMLInputElement
  ): TRefsInputs;
};
export const useRefsLayout = () => {
  const scrollY = useMotionValue(0);

  const layout =
    useMemo<TRefsInputs>(() => {
      const scroll = {
        y: scrollY,
        modes: PAGE_SCROLL_MODES,
        modeIndex: 0,
      };
      const inputRefsCreator = {
        number: {
          // update: function (
          //   name: string,
          //   instance: HTMLInputElement | null
          // ): TRefInstanceHandler {
          //   if (!this[name]) {
          //     this[name] = {
          //       current: null,
          //     };
          //   }
          //   this[name].current =
          //     instance;
          //   return this;
          // },
        },
        slider: {},
        update: function (
          key: keyof TInputRefs,
          name: string,
          instance: HTMLInputElement | null
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
