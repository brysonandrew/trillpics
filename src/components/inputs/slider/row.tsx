import { type FC } from "react";
import { TClassValueProps } from "@brysonandrew/config-types";
import {
  SliderStyled,
  TSliderStyledProps,
} from "~/components/inputs/slider/styled";
import { boxSize } from "~uno/rules/box/size";
import { MeshBackgroundText } from "~/components/layout/background/mesh/text";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { useVideoStyle } from "~/pages/video/style";
import { useUpdateStateHandler } from "~/store/hooks/use-update-state-handler";
import { INPUT_PATH_DELIMITER } from "~/pages/video/music/synth/constants";
import {
  isBeatsSliderConfigType,
  isMidisSliderConfigType,
  isMusicSliderConfigType,
  isScaleSliderConfigType,
  isSequenceSliderConfigType,
  isSynthConfigType,
  isSynthSliderConfigType,
} from "~/pages/video/music/synth/validators";
import { TState } from "~/store/types";
import {
  TBeatsOptionsKey,
  TMidisOptionsKey,
  TMidisSliderOptions,
  TMidisSliderOptionsKey,
  TMusicOptionsKey,
  TScaleOptions,
  TSequenceOptionsKey,
} from "~/store/state/music/types";
import { useTrillPicsStore } from "~/store/middleware";
import { cx } from "class-variance-authority";
import { TSynthConfigKey } from "~/store/state/music/constants";
import { isDefined } from "~/utils/validation/is/defined";

type TKeys =
  | readonly ["synth", TSynthConfigKey]
  | readonly [
      "sequence",
      TSequenceOptionsKey
    ]
  | readonly [
      "scale",
      keyof TScaleOptions
    ];
export type TUpdateSliderHandler = (
  value: number
) => void;
type TValueChangeHandler =
  TSliderStyledProps["onValueChange"];
type TProps = Omit<
  TSliderStyledProps,
  "value" | "name"
> &
  TClassValueProps & {
    name:
      | TMusicOptionsKey
      | `midis.${TMidisSliderOptionsKey}`
      | `beats.${TBeatsOptionsKey}`
      | `synth.${TSynthConfigKey}`
      | `sequence.${TSequenceOptionsKey}`
      | `scale.${keyof TScaleOptions}`;
    keys?: TKeys;
    onUpdate?: TUpdateSliderHandler;
    reviver?: (n: any) => number;
    replacer?: (n: number) => any;
  };
export const UiInputsSliderRow: FC<
  TProps
> = ({
  name,
  title,
  classValue,
  onUpdate,
  reviver,
  replacer,
  keys = name.split(
    INPUT_PATH_DELIMITER
  ),
  ...props
}) => {
  const state = useTrillPicsStore(
    ({
      bpm,
      master,
      synth,
      scale,
      sequence,
      midis,
      beats,
    }) => ({
      master,
      bpm,
      synth,
      scale,
      sequence,
      midis,
      beats,
    })
  );
  const [key, key1] = keys;
  const k = keys[0];

  const resolveMidiValue = (
    value: number
  ) => {
    switch (key1) {
      case "type": {
        return value;
      }
      default: {
        return +value;
      }
    }
  };
  const resolveValue = (
    draft: typeof state
  ) => {
    if (isMusicSliderConfigType(key)) {
      return draft[key];
    }
    if (
      key === "synth" &&
      isSynthSliderConfigType(key1)
    ) {
      return draft.synth[key1];
    }
    if (
      key === "sequence" &&
      isSequenceSliderConfigType(key1)
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
      key === "midis" &&
      isMidisSliderConfigType(key1)
    ) {
      return draft.midis[key1];
    }
    if (
      key === "beats" &&
      isBeatsSliderConfigType(key1)
    ) {
      return draft.beats[key1];
    }
  };
  const value = resolveValue(state);

  const set = useUpdateStateHandler();

  const handleUpdate: TUpdateSliderHandler =
    (value) => {
      const nextValue =
        resolveMidiValue(value);
      set((draft: TState) => {
        if (isMusicSliderConfigType(key)) {
          draft[key] = nextValue;

        }
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
          key === "midis" &&
          isMidisSliderConfigType(key1)
        ) {
          return draft.midis[key1];
        }
        if (
          key === "beats" &&
          isBeatsSliderConfigType(key1)
        ) {
          return draft.beats[key1];
        }
      });
    };
  const inputValue = value
    ? [reviver ? reviver(value) : value]
    : undefined;

  const handleValueChange: TValueChangeHandler =
    ([value]) => {
      (onUpdate ?? handleUpdate)(value);
    };
  const { sidebarWidthOffset, width } =
    useVideoStyle();
  const s = boxSize();
  return (
    <div
      className={cx(
        "relative row-space font-slab text-xs",
        classValue
      )}
      style={{
        gap: s.m025,
        height: s.m075,
      }}
    >
      <BackgroundGlass
        boxStyle={{
          left: sidebarWidthOffset,
        }}
      />
      <MeshBackgroundText
        style={{
          width:
            sidebarWidthOffset - s.m025,
          height: s.m,
          left: 0,
        }}
      >
        {title}
      </MeshBackgroundText>
      <div
        className="relative"
        style={{
          left: s.m025,
          width:
            width -
            sidebarWidthOffset -
            s.m -
            s.m2,
        }}
      >
        <SliderStyled
          value={inputValue}
          onValueChange={
            handleValueChange
          }
          {...props}
        />
      </div>
      <MeshBackgroundText
        classValue="relative"
        style={{
          width: s.m2,
          height: s.m,
          right: 0,
        }}
      >
        {value?.toString() ?? "-"}
      </MeshBackgroundText>
    </div>
  );
};
