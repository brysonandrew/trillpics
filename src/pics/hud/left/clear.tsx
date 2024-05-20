import type { FC } from "react";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { usePicVideo } from "~/hooks/pic/video";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { VIDEO_ROUTE } from "~/constants/params";
import { resolvePicSrc } from "~/utils/src";
import { useTrillPicsStore } from "~/store/middleware";
import { useBlurAnimate } from "~/hooks/animate/blur/animate";
import { MAX_COUNT } from "~/pages/video/_common/reorder";
import { IconsTrash } from "~/components/icons/video/trash";

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
    names,
    isVideoPics,
  } = usePicVideo();
  const { togglePathValue, isActive } =
    useNavigationControls(VIDEO_ROUTE);
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );

  if (
    !isVideoPics ||
    !screen.isDimensions
  )
    return null;
  const container = screen.container;
  const unitSize =
    container.width / MAX_COUNT;
  const handler = useBlurAnimate();
  const handleClear = () => {
    handler();
    if (!isActive) {
      togglePathValue(VIDEO_ROUTE);
    }
    clear();
  };
  const title = "Delete all";
  return (
    <Button
      onClick={handleClear}
      Icon={IconsTrash}
      subtitle={
        <>
          <p>
            {`Delete all ${count} of the pics you have added.`}
          </p>
          <div className="h-2" />
          <ul
            className="grid gap-2"
            style={{
              display: "grid",
              left: 0,
              width: container.width,
              gridTemplateColumns: `repeat(auto-fill, minmax(${unitSize}px, 1fr))`,
            }}
          >
            {names.map((name) => (
              <li key={name}>
                <img
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
