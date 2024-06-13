import { TUpdateSliderHandler } from "~/components/inputs/slider/row";
import {
  isSynthMultiOptionsType,
  isSynthOptionsType,
  isSynthType,
} from "~/pages/video/music/synth/validators";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const useSynthUpdate = () => {
  const { set } = useTrillPicsStore(
    ({ set }) => ({ set })
  );
  const handleUpdate: TUpdateSliderHandler =
    (name: string, value: any) => {
      const [key, key1] =
        name.split(".");
      const resolveValue = () => {
        switch (key1) {
          case "type": {
            return value;
          }
          default: {
            return +value;
          }
        }
      };

      set((draft: TState) => {
        if (isSynthOptionsType(key1)) {
          draft.options[key1] =
            resolveValue();
        }
        if (
          isSynthMultiOptionsType(key1)
        ) {
          draft.multi[key1] =
            resolveValue();
        }
      });
    };

  return handleUpdate;
};
export type TUseUpdateResult =
  ReturnType<typeof useSynthUpdate>;
