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
    clear: clearZoomClosing,
  } = usePicZoom(cell);
  const {
    addedCheck,
    removingCheck,
    clearRemoving,
  } = usePicVideo();
  const isAdded = addedCheck(name);

  const isRemoving =
    removingCheck(name);
  const handleLayoutAnimationComplete =
    () => {
      clearZoomClosing();
      clearRemoving();
    };

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
        if (isAdded) {
          return (
            <div
              key={resolveCompositeKey(
                "placeholder",
                name
              )}
              className={clsx(
                "bg-black-05 center"
              )}
              style={style}
            >
              <img
                className="fill object-contain grayscale-100 mix-blend-difference opacity-50"
                src={resolvePicSrc(
                  name
                )}
                alt={name}
                style={style}
              />
              {/* <TypographyBorderedMd>
                {name}
              </TypographyBorderedMd> */}
            </div>
          );
        }
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
