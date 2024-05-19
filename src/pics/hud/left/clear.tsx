import type { FC } from "react";
import { IconsTrash } from "~/components/icons/video/trash1";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { useContextGrid } from "~/context";
import { usePicVideo } from "~/hooks/pic/video";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { VIDEO_ROUTE } from "~/constants/params";
import { resolvePicSrc } from "~/utils/src";
import { PIC_SIZE_0125 } from "~/constants/remotion";
import { useTrillPicsStore } from "~/store/middleware";
import { useBlurXAnimate } from "~/hooks/blur/animate";

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
  const { main } = useContextGrid();
  const { togglePathValue, isActive } =
    useNavigationControls(VIDEO_ROUTE);
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );
  if (!isVideoPics) return null;
  const handler = useBlurXAnimate();

  const handleClear = () => {
    handler();
    if (!isActive) {
      togglePathValue(VIDEO_ROUTE);
    }
    clear();
  };
  const title = "Delete all";
  return (
    <>
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
              className="grid gap-2 w-full"
              style={{
                display: "grid",
                left: 0,
                width:
                  screen.isDimensions
                    ? screen.container
                        ?.width
                    : "100%",
                gridTemplateColumns: `repeat(auto-fill, minmax(${PIC_SIZE_0125}px, 1fr))`,
              }}
            >
              {names.map((name) => (
                <li key={name}>
                  <img
                    alt={name}
                    src={resolvePicSrc(
                      name
                    )}
                    width={
                      PIC_SIZE_0125
                    }
                    height={
                      PIC_SIZE_0125
                    }
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
    </>
  );
};
