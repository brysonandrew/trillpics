import type { FC } from "react";
import { motion } from "framer-motion";
import { TypographyBordered } from "~/components/typography/bordered";
import { PicsHeaderScrollTop } from "~/pics/header/scroll-top";
import { useContextGrid } from "~/context";

export const HeaderSubtitle: FC = () => {
  const { fonts } = useContextGrid();

  return (
    <motion.div
      key="header-right"
      className="relative flex gap-4"
    >
      {fonts["led_display-7"]
        .active && (
        <TypographyBordered
          classValue="text-main-inverted whitespace-nowrap"
          shadow={{
            classValue:
              "text-gray-9 whitespace-nowrap",
          }}
        >
          AI Art Gallery
        </TypographyBordered>
      )}
      {/* <PicsHeaderScrollTop /> */}
    </motion.div>
  );
};
