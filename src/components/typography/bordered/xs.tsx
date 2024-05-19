import type {
  FC,
  PropsWithChildren,
} from "react";
import { TypographyBordered } from "~/components/typography/bordered";
import { FILTERS_FAT_SVG_PROPS } from "~/shell/global/svg/filters/fat";

export const TypographyBorderedXs: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <TypographyBordered
      classValue="text-xs uppercase text-black font-sans"
      style={FILTERS_FAT_SVG_PROPS}
      shadow={{classValue:"text-white"}}
    >
      {children}
    </TypographyBordered>
  );
};
