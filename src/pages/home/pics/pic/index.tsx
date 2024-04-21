import type { FC } from "react";
import { motion } from "framer-motion";
import { Portal } from "~/components/portal";
import { TCell } from "~/pages/home/pics/columns/config";
import { PicBackdrop } from "~/pages/home/pics/pic/backdrop";
import { PicDisplay } from "~/pages/home/pics/pic/display";
import { usePic } from "~/pages/home/pics/pic/use-pic";

export type TPicProps = {
  colIndex: number;
  cell: TCell;
  size: number;
  maxColsCount: number;
};
export const Pic: FC<TPicProps> = (
  props
) => {
  const pic = usePic(props);
  const {
    isOpen,
    boxProps,
    backdropProps,
    isControls,
  } = pic;
  return (
    <motion.div {...boxProps}>
      <>
        {isOpen ? (
          <Portal>
            <>
              {isControls && (
                <PicBackdrop
                  {...backdropProps}
                />
              )}
              <PicDisplay {...pic} />
            </>
          </Portal>
        ) : (
          <PicDisplay {...pic} />
        )}
      </>
    </motion.div>
  );
};
