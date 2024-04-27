import type { FC } from "react";
import { AnimatePresence } from "framer-motion";
import { PicHover } from "~/shell/pics/pic/hover";
import { PicDisplayCell } from "~/shell/pics/pic/display/cell";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { TUseBoxChildProps } from "~/shell/pics/pic/box/use-box";
import { PicDirectorsModeControls } from "~/shell/pics/pic/directors-mode/controls";
import { useTrillPicsStore } from "~/store";
import { PillB } from "~/components/buttons/pill/b";
import { IconsPicZoomIn24 } from "~/components/icons/pic/zoom-in/24";

type TProps =
  TPropsWithChildren<TUseBoxChildProps>;
export const PicDirectorsModeCell: FC<
  TProps
> = ({
  children,
  ...boxChildProps
}) => {
  const { removeVideoPic, addVideoPic } =
    useTrillPicsStore(
      ({ removeVideoPic, addVideoPic }) => ({
        removeVideoPic,
        addVideoPic,
      })
    );
  return (
    <AnimatePresence>
      <PicDisplayCell
        key="PicDisplayCell"
        onTap={() =>
          boxChildProps.videoOrder > -1
            ? removeVideoPic(
                boxChildProps.name
              )
            : addVideoPic(
                boxChildProps.name
              )
        }
        {...boxChildProps}
      />
      <PicHover
        key="PicHover"
        {...boxChildProps}
      >
        <PillB
          isFlat
          title="Zoom pic"
          Icon={IconsPicZoomIn24}
          onClick={
            boxChildProps.onToggle
          }
        />
      </PicHover>
      <PicDirectorsModeControls
        {...boxChildProps}
      />
    </AnimatePresence>
  );
};
