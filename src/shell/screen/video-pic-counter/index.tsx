import type { FC } from "react";
import { motion } from "framer-motion";
import {
  Pill,
  TPillProps,
} from "~/components/layout/pill";
import clsx from "clsx";
import { usePicVideo } from "~/hooks/pic/video";
import { TypographyBordered } from "~/components/typography/bordered";
import { FILTERS_FAT_1_SVG_PROPS } from "~/shell/global/svg/filters/fat/1";

export const VideoPicsCounter: FC<
  Partial<
    Omit<TPillProps, "children"> & {
      children?: (
        count: number
      ) => JSX.Element;
    }
  >
> = ({
  classValue,
  children = (count: number) =>
    `${count}`,
  ...props
}) => {
  const { count, isVideoPics } =
    usePicVideo();
  if (!isVideoPics) return null;
  return (
    <Pill
      layoutId="VideoPicsCounter"
      classValue={clsx(
        "pointer-events-none font-display-led text-main-inverted",
        classValue ?? "relative"
      )}
      layout
      {...props}
    >
      <TypographyBordered
        classValue="text-sm mt-0.5"
        shadow={{
          classValue:
            "text-sm text-gray",
        }}
        style={FILTERS_FAT_1_SVG_PROPS}
      >
        <div className="whitespace-nowrap font-mono">
            {children(count)}
        </div>
      </TypographyBordered>
    </Pill>
  );
};
