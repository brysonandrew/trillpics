import type { FC } from "react";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { IconsVisible } from "~/components/icons/video/visible";
import { useContextGrid } from "~/context";
import { useTrillPicsStore } from "~/store/middleware";

export const HideControls: FC<
  Partial<TPillBHoverProps>
> = (props) => {
  const { resetLayout } =
    useContextGrid();
  const { isControls, toggleControls } =
    useTrillPicsStore(
      ({
        isControls,
        toggleControls,
      }) => ({
        isControls,
        toggleControls,
      })
    );

  const handleClick = () => {
    resetLayout();
    toggleControls(false);
  };
  const handleShow = () => {
    toggleControls(true);
  };
  const title = "Zen Mode"; // "Hide controls";

  return (
    <PillBHover
      title={title}
      onClick={handleClick}
      Icon={IconsVisible}
      subtitle={
        <div className="column-start gap-2">
          <p>{`This removes the page's default display.`}</p>
          <p>{`To exit this mode, simply move your mouse or pointer device on and off the page.`}</p>
        </div>
      }
      {...props}
    >
      {title}
    </PillBHover>
  );
};
