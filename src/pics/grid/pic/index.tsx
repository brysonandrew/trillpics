import type { FC } from "react";
import { Box } from "~/pics/grid/pic/box";
import { TPic } from "~/store/state/pics/types";
import { PicDisplayCell } from "~/pics/grid/pic/cell";
import { FULLSCREEN_Z } from "~/constants/dom";
import { usePicSelectedRead } from "~/hooks/pic/selected/read";
import {
  QUERY_PARAM_KEYS,
  ZOOM_PARAM_KEY,
} from "~/hooks/pic/constants";
import { useTrillPicsStore } from "~/store/middleware";
import { ADD_RANDOM_HOVER_KEY } from "~/pages/video/_root/controls/add-random";
import { useReadyContext } from "~/shell/ready/context";

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
  const { isSelected, isRemoving } =
    usePicSelectedRead(name);
  const {
    isSelected: isZoomed,
    isRemoving: isUnzooming,
  } = usePicSelectedRead(
    name,
    QUERY_PARAM_KEYS[ZOOM_PARAM_KEY]
  );
  const {
    random: [randoms],
  } = useReadyContext();
  const { isHover } = useTrillPicsStore(
    ({ isHover }) => ({ isHover })
  );
  const isAddRandomHover = isHover(
    ADD_RANDOM_HOVER_KEY
  );
  const isRandom =
    randoms.includes(name) &&
    isAddRandomHover;

  return (
    <Box name={name} {...cell}>
      {({ ...boxChildProps }) => {
        if (
          isSelected ||
          isZoomed ||
          isRandom
        )
          return null;

        return (
          <PicDisplayCell
            {...boxChildProps}
            style={{
              ...boxChildProps.style,
              zIndex:
                isRemoving ||
                isUnzooming
                  ? FULLSCREEN_Z
                  : 0,
            }}
          />
        );
      }}
    </Box>
  );
};
