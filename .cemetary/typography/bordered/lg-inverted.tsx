import type {
  FC,
  PropsWithChildren,
} from "react";
import { TClassValueProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { TypographyBordered } from "~/components/typography/bordered";
import { FILTERS_FAT_SVG_PROPS } from "~/shell/global/svg/filters/fat";

export const TypographyBorderedLgInverted: FC<
  PropsWithChildren<TClassValueProps>
> = ({ children, classValue }) => {
  return (
    <TypographyBordered
      classValue={clsx(
        "text-8xl text-black dark:text-white-8 char-gap-6 font-title",
        classValue
      )}
      style={FILTERS_FAT_SVG_PROPS}
      shadow={{
        classValue:
          "text-white-7 dark:text-black-4",
      }}
    >
      {children}
    </TypographyBordered>
  );
};
