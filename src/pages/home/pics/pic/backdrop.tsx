import type { FC } from "react";
import { motion } from "framer-motion";
import { IconsPicZoomOut } from "~/components/icons/pic/zoom-out";
import { TUsePic } from "~/pages/home/pics/pic/use-pic";

type TProps = TUsePic["backdropProps"];
export const PicBackdrop: FC<
  TProps
> = ({ ...backdropProps }) => {
  return (
    <motion.div {...backdropProps}>
      <div className="absolute top-4 left-6">
        <IconsPicZoomOut />
      </div>
    </motion.div>
  );
};
