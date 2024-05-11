import type { FC } from "react";
import { Box } from "~/pics/grid/pic/box";
import { PicZoomed } from "~/pics/grid/pic/zoomed";
import { TPic } from "~/store/state/pics/types";
import { usePicZoom } from "~/hooks/pic/zoom";
import { PicDisplayCell } from "~/pics/grid/pic/cell";
import { resolvePresence } from "~/utils/animation";
import { FULLSCREEN_Z } from "~/constants/dom";

export type TCell = {
  row: number;
  column: number;
};
export type TPicProps = TCell & {
  name: TPic;
};
export const Pic: FC<TPicProps> = ({
  name,
  ...cell
}) => {
  const {
    isCellZoomed,
    isCellClosing,
    clear,
  } = usePicZoom(cell);
  return (
    <Box
      cursor="zoom-in"
      name={name}
      {...cell}
    >
      {({
        style,
        ...boxChildProps
      }) => {
        if (isCellZoomed)
          return (
            <PicZoomed
              style={style}
              {...boxChildProps}
            />
          );
        return (
          <PicDisplayCell
            onLayoutAnimationComplete={
              clear
            }
            {...(isCellClosing
              ? {
                  style: {
                    zIndex:
                      FULLSCREEN_Z,
                    ...style,
                  },
                }
              : {
                  ...resolvePresence(
                    { opacity: 0.9 },
                    { opacity: 1 }
                  ),
                  style: {
                    zIndex: 0,
                    ...style,
                  },
                })}
            {...boxChildProps}
          />
        );
      }}
    </Box>
  );
};
