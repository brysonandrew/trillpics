import type { FC } from "react";
import { motion } from "framer-motion";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { TypographyBordered } from "~/components/typography/bordered";
import { IconsOffline } from "~/components/icons/offline";
import { boxStyle } from "~/constants/box/style";
import clsx from "clsx";
import { LinesVertical } from "~/pages/video/_common/footer/nav/lines/vertical";

export const Offline: FC = () => {
  const { borderRadius, size } =
    boxStyle({
      size: "m",
      layer: "floating",
      borderRadius: "xl",
    });
  return (
    <>
      <motion.div
        className={clsx(
          "relative -right-4 top-0",
          "self-end row px-4 gap-4",
          "text-main uppercase whitespace-nowrap",
          "bg-white-01 backdrop-blur-lg"
        )}
        layout="position"
        style={{
          height: size,
          borderRadius,
        }}
        {...PRESENCE_OPACITY}
      >
        <IconsOffline />
        <div>
          <span>You are</span>{" "}
          <strong>offline</strong>
        </div>
      </motion.div>
      <LinesVertical classValue="flex md:hidden opacity-50" />
    </>
  );
};
