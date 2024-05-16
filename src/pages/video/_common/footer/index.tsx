import { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { VideoFooterLeft } from "~/pages/video/_common/footer/left";
import { useTrillPicsStore } from "~/store/middleware";
import { createPortal } from "react-dom";
import { useContextGrid } from "~/context";

type TProps = TPropsWithChildren;
export const VideoFooter: FC<
  TProps
> = () => {
  const { main } = useContextGrid();
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );
  console.log(screen.isDimensions, main.ui.footer)
  if (!screen.isDimensions) return null;
  if (!main.ui.footer) return null;
  return (
    <>
      {createPortal(
        <div className="absolute bottom-0 w-0 left-0">
          <VideoFooterLeft />
        </div>,
        main.ui.footer
      )}
    </>
  );
};
