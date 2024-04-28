import type { FC } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { PicHover } from "~/shell/pics/pic/hover";
import { PicDisplayCell } from "~/shell/pics/pic/display/cell";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { PicDirectorsModeControls } from "~/pages/directors-mode/pic/controls";
import { useTrillPicsStore } from "~/store";
import { PillB } from "~/components/buttons/pill/b";
import { IconsPicZoomIn24 } from "~/components/icons/pic/zoom-in/24";
import { TBoxChildProps } from "~/shell/pics/pic/box";
import { TPicProps } from "~/shell/pics/pic";

type TProps =
  TPropsWithChildren<TPicProps>;
export const PicDirectorsModeCell: FC<
  TProps
> = ({
  children,

  ...props
}) => {
  const {
    name,
    rowIndex,
    columnIndex,
  } = props;

  return (
    <PicDirectorsModeControls
      {...props}
    />
  );
};

{
  /* <PicDisplayCell
        key="PicDisplayCell"
        onTap={() =>
          videoOrder > -1
            ? removeVideoPic(
                boxChildProps.name
              )
            : addVideoPic(
                boxChildProps.name
              )
        }
        {...boxChildProps}
      />  */
}
{
  /* <PicHover
        key="PicHover"
        isHovering
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
      </PicHover> */
}
