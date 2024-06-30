import type {
  ChangeEventHandler,
  FC,
} from "react";
import { TInputProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { InputsNumberBackground } from "~/components/inputs/number/background";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { isNull } from "~/utils/validation/is/null";
import { box } from "~uno/rules/box";

type TProps = TInputProps & {
  name: string;
  onUpdate(value: number): void;
};
export const InputsNumberSlider: FC<
  TProps
> = ({
  name,
  style,
  onUpdate,
  ...props
}) => {
  const { layout } = useMusicRefs();

  const handleSliderChange: ChangeEventHandler<
    HTMLInputElement
  > = ({
    currentTarget: { name, value },
  }) => {
    onUpdate(Number(value));
  };

  return (
    <div
      className="relative h-5 grow _bi-radial opacity"
      style={{
        borderRadius: box.radius.m,
      }}
    >
      <InputsNumberBackground />
      <input
        type="range"
        className={clsx(
          "fill",
          "appearance-none bg-transparent",
          "[&::-webkit-slider-runnable-track]:bg-transparent",
          "[&::-webkit-slider-thumb]:(relative w-4 h-4 rounded-full z-0)",
          "[&::-webkit-slider-thumb]:(_bi-conic-metal appearance-none pointer-cursor)"
        )}
        ref={(instance) => {
          if (isNull(instance)) return;

          layout.update(
            "slider",
            name,
            instance
          );
        }}
        style={style}
        onChange={handleSliderChange}
        {...props}
      />
    </div>
  );
};
