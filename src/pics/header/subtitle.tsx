import type { FC } from "react";
import { motion } from "framer-motion";
import { TypographyBordered } from "~/components/typography/bordered";
import { useContextGrid } from "~/context";
import { TClassValueProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { FILTERS_FAT_2_SVG_PROPS } from "~/shell/global/svg/filters/fat/2";
import { TypographyBorderedMd } from "~/components/typography/bordered/md";

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
        <TypographyBorderedMd>
          AI Art Gallery
        </TypographyBorderedMd>
      )}
    </motion.div>
  );
};
