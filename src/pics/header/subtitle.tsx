import type { FC } from "react";
import { motion } from "framer-motion";
import { TypographyBordered } from "~/components/typography/bordered";
import { useContextGrid } from "~/context";
import { TClassValueProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { FILTERS_FAT_SVG_PROPS } from "~/shell/global/svg/filters/fat";
import { FILTERS_FAT_1_SVG_PROPS } from "~/shell/global/svg/filters/fat/1";
import { FILTERS_FAT_2_SVG_PROPS } from "~/shell/global/svg/filters/fat/2";

type TProps = TClassValueProps;
export const HeaderSubtitle: FC<
  TProps
> = ({ classValue }) => {
  const { fonts } = useContextGrid();

  return (
    <motion.div
      key="header-right"
      className={clsx(
        "relative gap-4",
        classValue
      )}
    >
      {fonts["led_display-7"]
        .active && (
        <TypographyBordered
          classValue="text-white whitespace-nowrap font-mono"
          shadow={{
            classValue:
              "text-black whitespace-nowrap",
          }}
          style={FILTERS_FAT_2_SVG_PROPS}
        >
          AI Art Gallery
        </TypographyBordered>
      )}
    </motion.div>
  );
};
