import type {
  FC,
  PropsWithChildren,
} from "react";
import { TypographyBordered } from "~/components/typography/bordered";
import { FILTERS_FAT_1_SVG_PROPS } from "~/shell/global/svg/filters/fat/1";

export const TypographyBorderedSm: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <div>
      <TypographyBordered
        classValue="text-sm mt-0.5"
        shadow={{
          classValue:
            "text-sm text-gray",
        }}
        style={FILTERS_FAT_1_SVG_PROPS}
      >
        <div className="whitespace-nowrap font-mono">
          {children}
        </div>
      </TypographyBordered>
    </div>
  );
};
