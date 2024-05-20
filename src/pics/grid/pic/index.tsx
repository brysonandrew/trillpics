import type { FC } from "react";
import { Box } from "~/pics/grid/pic/box";
import { PicZoomed } from "~/pics/grid/pic/zoomed";
import { TPic } from "~/store/state/pics/types";
import { usePicZoom } from "~/hooks/pic/zoom";
import { PicDisplayCell } from "~/pics/grid/pic/cell";
import { resolvePresence } from "~/utils/animation";
import { FULLSCREEN_Z } from "~/constants/dom";
import { usePicVideo } from "~/hooks/pic/video";
import clsx from "clsx";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { resolvePicSrc } from "~/utils/src";
import { useVideoReadEntries } from "~/hooks/pic/video/read/entries/hook";

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
    isCurrOver,
    clear: clearZoomClosing,
  } = usePicZoom(cell);
  const {
    addedCheck,
    removingCheck,
    decryptRemoving,
  } = useVideoReadEntries();
  const handleLayoutAnimationComplete =
    () => {
      if (isCellClosing) {
        clearZoomClosing();
      }
    };

  const isRemoving =
    removingCheck(name);
 // const name = decryptRemoving(_name);
  const isAdded = addedCheck(name);

  return (
    <Box
      cursor="pointer"
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
              handleLayoutAnimationComplete
            }
            {...(isCellClosing ||
            isRemoving
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
                    backgroundColor: isAdded ? isRemoving ? 'blue' : 'red' : '',
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
