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
import { box } from "~uno/rules/box";
import { TSliderStyledProps } from "~/components/inputs/slider/types";

export type TSliderRowProps =
  TClassValueProps &
    TSliderStyledProps &
    TTitleProps;
export const SliderRow: FC<
  TSliderRowProps
> = (props) => {
  const {
    children,
    title,
    classValue,
    ...sliderProps
  } = props;
  return (
    <div
      className={cx(
        "relative row-space font-slab text-xs",
        classValue
      )}
      style={{
        left: box._00625,
        gap: box._075,
        height: box._075,
      }}
    >
      <TypographyXxxs
        style={{
          left: box._0125,
          width:
            box._15 - box._0125 / 2,
          textAlign: "left",
        }}
      >
        {title}
      </TypographyXxxs>
      <div
        className="row grow"
        style={{
          gap: box._05,
        }}
      >
        <div
          className="relative grow"
          style={
            {
              ...box.p(box._0125)
            }
          }
        >
          <BackgroundGlass
            boxStyle={{
              ...box.i(-box._0125),
            }}
          />
          {children}
        </div>
        <MeshBackgroundText
          classValue="relative"
          style={{
            right: box._0125,
            width:
              box._15 - box._0125 / 2,
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
