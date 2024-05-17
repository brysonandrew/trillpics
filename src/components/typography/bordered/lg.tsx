import type {
  FC,
  PropsWithChildren,
} from "react";
import { TClassValueProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { TypographyBordered } from "~/components/typography/bordered";
import { FILTERS_FAT_2_SVG_PROPS } from "~/shell/global/svg/filters/fat/2";

export const TypographyBorderedLg: FC<
  PropsWithChildren<TClassValueProps>
> = ({ children, classValue }) => {
  return (
    <TypographyBordered
      classValue={clsx(
        "text-6xl dark:text-black-9 text-white-5 font-sans char-gap-6",
        classValue
      )}
      style={FILTERS_FAT_2_SVG_PROPS}
      shadow={{
        classValue: "dark:text-black-5 text-white-9",
      }}
    >
      {children}
    </TypographyBordered>
  );
};
