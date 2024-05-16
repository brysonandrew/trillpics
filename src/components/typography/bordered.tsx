import type {
  FC,
  PropsWithChildren,
} from "react";
import { TClassValueProps } from "@brysonandrew/config-types";
import { FILTERS_FAT_SVG_PROPS } from "~/shell/global/svg/filters/fat";
import clsx from "clsx";

type TConfig = TClassValueProps & {
  shadow: TClassValueProps;
};
type TProps =Partial<TConfig>
export const TypographyBordered: FC<
  PropsWithChildren<TProps>
> = ({
  classValue,
  shadow,
  children,
}) => {
  return (
    <div
      className={clsx(
        "relative",
        classValue ?? 'text-main-inverted'
      )}
    >
      <div
        className={clsx(
          "fill",
          shadow?.classValue ?? 'text-main'
        )}
        style={{
          ...FILTERS_FAT_SVG_PROPS,
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
