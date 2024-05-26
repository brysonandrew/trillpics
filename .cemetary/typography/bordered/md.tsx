import type {
  FC,
  PropsWithChildren,
} from "react";
import { TypographyBordered } from "~/components/typography/bordered";
import { FILTERS_FAT_2_SVG_PROPS } from "~/shell/global/svg/filters/fat/2";

export const TypographyBorderedMd: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <TypographyBordered
      classValue="text-white uppercase dark:text-black whitespace-nowrap font-sans"
      shadow={{
        classValue:
          "text-gray-4 dark:text-gray-8 whitespace-nowrap",
      }}
      style={FILTERS_FAT_2_SVG_PROPS}
    >
      {children}
    </TypographyBordered>
  );
};
