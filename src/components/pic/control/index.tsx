import type { FC } from "react";
import { motion } from "framer-motion";
import { TChildren } from "@brysonandrew/config-types";
import { IconsPicZoomOut } from "~/components/icons/pic/zoom-out";
import {
  TUsePicReturn,
  TUsePicConfig,
  usePic,
} from "../use-pic";
import { Portal } from "./Portal";

type TProps = TUsePicConfig & {
  boxChildren?: TChildren;
  children(
    imageReturn: TUsePicReturn
  ): TChildren;
};
export const Control: FC<TProps> = ({
  boxChildren,
  children,
  ...config
}) => {
  const imageReturn = usePic(config);
  const {
    isOpen,
    boxProps,
    backdropProps,
  } = imageReturn;
  const c = children(imageReturn);

  return (
    <motion.div {...boxProps}>
      <>
        {isOpen ? (
          <Portal>
            <>
              <motion.div
                {...backdropProps}
              >
                <div className="absolute top-4 left-6">
                  <IconsPicZoomOut />
                </div>
              </motion.div>
              {c}
            </>
          </Portal>
        ) : (
          c
        )}
      </>
      {boxChildren}
    </motion.div>
  );
};
