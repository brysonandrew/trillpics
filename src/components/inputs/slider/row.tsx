import { type FC } from "react";
import {
  TClassValueProps,
  TTitleProps,
} from "@brysonandrew/config-types";
import { MeshBackgroundText } from "~/components/layout/background/mesh/text";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { cx } from "class-variance-authority";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";
import { TypographyXxs } from "~/components/layout/typography/xxs";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";
import { TSliderStyledProps } from "~/components/inputs/slider/types";

export type TSliderRowProps =
  TClassValueProps &
    TSliderStyledProps &
    TTitleProps;
export const SliderRow: FC<
  TSliderRowProps
> = ({
  children,
  title,
  classValue,
  ...sliderProps
}) => {
  const { sidebarWidthOffset, width } =
    useVideoStyle();

  return (
    <div
      className={cx(
        "relative row-space font-slab text-xs",
        classValue
      )}
      style={{
        left: box.m00625,
        gap: box.m075,
        height: box.m075,
      }}
    >
      <MeshBackgroundText
        style={{
          left: box.m0125,
          width:
            box.m15 - box.m0125 / 2,
        }}
      >
        <TypographyXxxs
          style={{
            textAlign: "left",
          }}
        >
          {title}
        </TypographyXxxs>
      </MeshBackgroundText>
      <div
        className="row grow"
        style={{
          gap: box.m05,
        }}
      >
        <div
          className="relative grow"
          style={
            {
              // ...box.p(box.m0125),
            }
          }
        >
          <BackgroundGlass
            boxStyle={{
              ...box.i(-box.m0125),
            }}
          />
          {children}
        </div>
        <MeshBackgroundText
          classValue="relative"
          style={{
            right: box.m0125,
            width:
              box.m15 - box.m0125 / 2,
          }}
        >
          <TypographyXxs
            style={{
              textAlign: "right",
            }}
          >
            {sliderProps.value?.toString() ??
              "-"}
          </TypographyXxs>
        </MeshBackgroundText>
      </div>
    </div>
  );
};
