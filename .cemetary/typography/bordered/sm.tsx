import type {
  FC,
  PropsWithChildren,
} from "react";
import clsx from "clsx";
import { TypographyBordered } from "~/components/typography/bordered";
import { FILTERS_FAT_2_SVG_PROPS } from "~/shell/global/svg/filters/fat/2";

export const TypographyBorderedSm: FC<
  PropsWithChildren<{
    sizeClass?: string;
    fontClass?: string;
  }>
> = ({
  children,
  sizeClass = "text-sm",
  fontClass = "font-slab",
}) => {
  return (
    <TypographyBordered
      classValue={clsx(
        sizeClass,
        fontClass,
        "mt-0.5 uppercase text-main-inverted"
      )}
      shadow={{
        classValue: clsx(
          sizeClass,
          fontClass,
          "text-gray"
        ),
      }}
      style={FILTERS_FAT_2_SVG_PROPS}
    >
      <div className="whitespace-nowrap">
        {children}
      </div>
    </TypographyBordered>
  );
};
