import type { FC } from "react";
import { motion } from "framer-motion";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { VIDEO_ROUTE } from "~/constants/params";
import { resolvePicSrc } from "~/utils/src";
import { useTrillPicsStore } from "~/store/middleware";
import { useBlurAnimate } from "~/hooks/animate/blur/animate";
import { IconsTrash } from "~/components/icons/video/trash";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";
import { usePicVideoWriteInputs } from "~/hooks/pic/video/write/inputs/hook";
import { boxSize } from "~/constants/box/size";
import { useContextGrid } from "~/context";
export const LEFT_BUTTONS_CLEAR_TITLE =
  "Delete all";

export const LeftButtonsClear: FC<
  TVideoFooterProps &
    Partial<TPillBHoverProps>
> = ({
  Button = PillBHover,
  ...props
}) => {
  const {
    clear,
    count,
    pics: names,
    isPics: isVideoPics,
  } = usePicVideoWriteInputs();
  const { togglePathValue, isActive } =
    useNavigationControls(VIDEO_ROUTE);
  const { screen } = useContextGrid();
  const handler = useBlurAnimate();

  if (!isVideoPics) return <div/>;
  const container = screen.container;
  const unitSize =
    container.width / MAX_COUNT;
  const handleClear = () => {
    handler();
    if (!isActive) {
      togglePathValue(VIDEO_ROUTE);
    }
    clear();
  };
  const s = boxSize();
  const title =
    LEFT_BUTTONS_CLEAR_TITLE;
  return (
    <Button
      onClick={handleClear}
      Icon={IconsTrash}
      direction="rtl"
      subtitle={
        <>
          <p>
            {`Delete all ${count} of the pics you have added.`}
          </p>
          <div className="h-6" />
          <ul
            className="relative grid gap-2"
            style={{
              display: "grid",
              left: 0,
              width: container.width,
              gap: s.m,
              gridTemplateColumns: `repeat(auto-fill, minmax(${unitSize}px, 1fr))`,
            }}
          >
            {names.map((name) => (
              <li key={name}>
                <motion.img
                  layoutId={name}
                  alt={name}
                  src={resolvePicSrc(
                    name
                  )}
                  width={unitSize}
                  height={unitSize}
                />
              </li>
            ))}
          </ul>
        </>
      }
      {...props}
      title={title}
    >
      {title}
    </Button>
  );
};
