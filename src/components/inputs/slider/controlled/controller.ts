import { useUpdateStateHandler } from "~/store/hooks/use-update-state-handler";
import { INPUT_PATH_DELIMITER } from "~/pages/video/music/synth/constants";
import {
  isBeatsSliderConfigType,
  isScaleSliderConfigType,
  isSequenceSliderConfigType,
  isSynthSliderConfigType,
} from "~/pages/video/music/synth/validators";
import { TState } from "~/store/types";
import { useTrillPicsStore } from "~/store/middleware";
import { TSliderStyledProps, TUpdateNumberHandler, TUpdateNumberHandlerProps } from "~/components/inputs/slider/types";
import { useContextMusicInit } from "~/pages/video/music/_context/init";

export type TSliderControllerProps =
  Omit<
    TSliderStyledProps,
    "value" | "name"
  > & {
    name: string;
    keys?: string[];
  } & TUpdateNumberHandlerProps;
export const useSliderController = ({
  name,
  onUpdate,
  keys = name.split(
    INPUT_PATH_DELIMITER
  ),
}: TSliderControllerProps) => {
  const state = useTrillPicsStore(
    ({ bpm, beats }) => ({
      bpm,
      beats,
    })
  );
  const { stepsRecord } =
    useContextMusicInit();

  const [key, key1] = keys;
  const k = keys[0];

  // const resolveMidiValue = (
  //   value: number
  // ) => {
  //   switch (key1) {
  //     case "type": {
  //       return value;
  //     }
  //     default: {
  //       return +value;
  //     }
  //   }
  // };
  const resolveValue = (
    draft: typeof state
  ) => {
    // if (
    //   key === "synth" &&
    //   isSynthSliderConfigType(key1)
    // ) {
    //   return draft.synth[key1];
    // }
    // if (
    //   key === "sequence" &&
    //   isSequenceSliderConfigType(key1)
    // ) {
    //   return draft.sequence[key1];
    // }
    // if (
    //   key === "scale" &&
    //   isScaleSliderConfigType(key1)
    // ) {
    //   return draft.scale[key1];
    // }
    // if (
    //   key === "midis" &&
    //   isNodesSliderConfigType(key1)
    // ) {
    //   return draft.midis[key1];
    // }
    // if (
    //   key === "beats" &&
    //   isBeatsSliderConfigType(key1)
    // ) {
    //   return draft.beats[key1];
    // }
  };
  const value = resolveValue(state);

  const set = useUpdateStateHandler();

  const handleUpdate: TUpdateNumberHandler =
    (value) => {
      const nextValue = Number(value);
      set((draft: TState) => {
        if (
          key === "synth" &&
          isSynthSliderConfigType(key1)
        ) {
          draft.synth[key1] = nextValue;
        }
        if (
          key === "sequence" &&
          isSequenceSliderConfigType(
            key1
          )
        ) {
          return draft.sequence[key1];
        }
        if (
          key === "scale" &&
          isScaleSliderConfigType(key1)
        ) {
          return draft.scale[key1];
        }
        if (
          key === "beats" &&
          isBeatsSliderConfigType(key1)
        ) {
          return draft.beats[key1];
        }
      });
    };
  // const inputValue = value
  //   ? [value]
  //   : undefined;

  // const handleValueChange: TSliderValueChangeHandler =
  //   ([value]) => {
  //     (onUpdate ?? handleUpdate)(value);
  //   };

  // return {
  //   value:inputValue,
  //   onValueChange: handleValueChange,
  // };
};
