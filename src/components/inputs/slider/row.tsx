import { type FC } from "react";
import { cx } from "class-variance-authority";
import { TClassValueProps } from "@brysonandrew/config-types";
import {
  SliderStyled,
  TSliderStyledProps,
} from "~/components/inputs/slider/styled";
import { boxSize } from "~uno/rules/box/size";
import { MeshBackgroundText } from "~/components/layout/background/mesh/text";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { useVideoPlayerStyle } from "~/pages/video/player/style";

export type TUpdateSliderHandler = (
  name: string,
  value: number | string
) => void;
type TValueChangeHandler =
  TSliderStyledProps["onValueChange"];
type TProps = Omit<
  TSliderStyledProps,
  "value" | "name"
> &
  TClassValueProps & {
    name: string;
    value?: number;
    onUpdate: TUpdateSliderHandler;
  };
export const UiInputsSliderRow: FC<
  TProps
> = ({
  name,
  title,
  classValue,
  value,
  onUpdate,
  ...props
}) => {
  const inputValue = value
    ? [value]
    : undefined;

  const handleValueChange: TValueChangeHandler =
    ([value]) => {
      onUpdate(name, value);
    };
  const { sidebarWidthOffset, width } =
    useVideoPlayerStyle();
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
          name={name}
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
