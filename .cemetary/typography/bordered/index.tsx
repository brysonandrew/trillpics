import type {
  FC,
  PropsWithChildren,
} from "react";
import { TClassValueProps, TElementProps } from "@brysonandrew/config-types";
import { FILTERS_FAT_SVG_PROPS } from "~/shell/global/svg/filters/fat";
import clsx from "clsx";

type TConfig = TElementProps & TClassValueProps & {
  shadow: TClassValueProps;
};
type TProps =Partial<TConfig>
export const TypographyBordered: FC<
  PropsWithChildren<TProps>
> = ({
  classValue,
  shadow,
  children,
  style
}) => {
  return (
    <div
      className={clsx(
        "relative",
        classValue ?? 'text-main-inverted text-4xl'
      )}
    >
      <div
        className={clsx(
          "fill",
          shadow?.classValue ?? classValue ?? 'text-main text-4xl'
        )}
        style={{
          ...FILTERS_FAT_SVG_PROPS,
          ...style
        }}
      >
        {children}
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
};
