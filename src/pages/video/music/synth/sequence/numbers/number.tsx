import {
  ChangeEventHandler,
  FC,
  useRef,
} from "react";
import clsx from "clsx";
import { InputsBox } from "~/components/inputs/box";
import {
  TSliderStyledProps,
  TUpdateSliderHandler,
} from "~/components/inputs/slider/types";
import { resolveMidiSteps } from "~/constants/music/midi/steps";
import { TSequenceSliderOptionsKey } from "~/pages/video/music/synth/sequence/types";
import { useUpdateStateHandler } from "~/store/hooks/use-update-state-handler";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";
import { TInputProps } from "~/types/inputs";
import { isNumber } from "~/utils/validation/is/number";
import { box } from "~uno/rules/box";
import { SliderSm } from "~/components/inputs/slider/sm";
import { SliderStyled } from "~/components/inputs/slider/styled";
const MIN = 0;
const MAX = 8;
const STEP = 0.1;
type TProps = TInputProps & {
  optionsKey: TSequenceSliderOptionsKey;
  min?: number;
  max?: number;
  step?: number;
};
export const SequenceNumber: FC<
  TProps
> = ({
  optionsKey,
  min = MIN,
  max = MAX,
  step = STEP,
  title,
  ...props
}) => {
  const ref = useRef<HTMLInputElement|null>(null);
  const set = useUpdateStateHandler();
  const { sequence, scale } =
    useTrillPicsStore(
      ({ sequence, scale }) => ({
        sequence,
        scale,
      })
    );
  const handleUpdate: TUpdateSliderHandler =
    (value: number) => {
      if (
        ref.current &&
        isNumber(value) &&
        value < max &&
        value > min
      ) {
        const nextValue = value;
        ref.current.value = `${nextValue}`;
        set((draft: TState) => {
          draft.sequence[optionsKey] =
            nextValue;
          draft.steps =
            resolveMidiSteps({
              ...sequence,
              ...scale,
              [optionsKey]: nextValue,
            });
        });
      }
    };

  const handleValueChange: TSliderStyledProps["onValueChange"] =
    ([value]) => {
      console.log(value);
      handleUpdate(value);
    };

  const handleChange: ChangeEventHandler<
    HTMLInputElement
  > = ({
    currentTarget: { name, value },
  }) => {
    const next = Number(value);
    handleUpdate(next);
  };
  const name =
    `sequence.${optionsKey}` as const;
  return (
    <InputsBox title={title ?? name}>
      <div className="grow">
        <SliderStyled
          title={title ?? ""}
          min={min}
          max={max}
          step={step}
          defaultValue={[
            Number(props.defaultValue),
          ]}
          onValueChange={
            handleValueChange
          }
        />
      </div>

      <input
        ref={ref}
        type="number"
        className={clsx(
          "center text-center bg-black-02 backdrop-blur-lg z-20 text-xs font-slab",
          "border border-white-02"
        )}
        style={{
          borderRadius: box.radius.m,
          // ...box.py(box.m025),
          height: box.m0625,
          lineHeight: box.m0625,
          ...box.px(box.m0125),
        }}
        name={name}
        title={optionsKey}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        {...props}
      />
    </InputsBox>
  );
};
