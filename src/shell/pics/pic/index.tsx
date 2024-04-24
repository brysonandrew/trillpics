import type { FC } from "react";
import { AnimatePresence } from "framer-motion";
import { PortalBody } from "@brysonandrew/layout-portal";
import { TCell } from "~/shell/pics/columns/config";
import { PicBackdrop } from "~/shell/pics/pic/backdrop";
import { Box } from "~/shell/pics/pic/box";
import { PicDirectorsMode } from "~/shell/pics/pic/directors-mode";
import { PicHover } from "~/shell/pics/pic/hover";
import { PicDisplayCell } from "~/shell/pics/pic/display/cell";
import { PicDisplayZoomed } from "~/shell/pics/pic/display/zoomed";

export type TPicProps = {
  colIndex: number;
  cell: TCell;
  size: number;
  maxColsCount: number;
};
export const Pic: FC<TPicProps> = (
  props
) => {
  return (
    <Box {...props}>
      {(boxChildProps) => {
        return (
          <>
            {boxChildProps.isPicZoomed ? (
              <PortalBody>
                <PicBackdrop
                  {...boxChildProps}
                >
                  {(
                    backdropChildProps
                  ) => (
                    <PicDisplayZoomed
                      {...boxChildProps}
                      {...backdropChildProps}
                    />
                  )}
                </PicBackdrop>
              </PortalBody>
            ) : (
              <AnimatePresence>
                <PicDisplayCell
                  key="PicDisplayCell"
                  {...boxChildProps}
                />
                <PicHover
                  key="PicHover"
                  {...boxChildProps}
                />
                <PicDirectorsMode
                  key="PicDirectorsMode"
                  {...boxChildProps}
                />
              </AnimatePresence>
            )}
          </>
        );
      }}
    </Box>
  );
};
