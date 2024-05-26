import type {
  FC,
  PropsWithChildren,
} from "react";
import { TClassValueProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { TypographyBordered } from "~/components/typography/bordered";
import { FILTERS_FAT_2_SVG_PROPS } from "~/shell/global/svg/filters/fat/2";
import { FILTERS_FAT_4_SVG_PROPS } from "~/shell/global/svg/filters/fat/4";

export const TypographyBorderedLg: FC<
  PropsWithChildren<TClassValueProps>
> = ({ children, classValue }) => {
  return (

    <TypographyBordered
      classValue={clsx(
        "text-8xl dark:text-black text-white-8 char-gap-6 font-title",
        classValue
      )}
      style={FILTERS_FAT_4_SVG_PROPS}
      shadow={{
        classValue: "dark:text-white-7 text-black-4",
      }}
    >
      {children}
    </TypographyBordered>

  );
};
