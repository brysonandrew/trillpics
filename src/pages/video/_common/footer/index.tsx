import { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { VideoFooterLeft } from "~/pages/video/_common/footer/left";
import { useTrillPicsStore } from "~/store/middleware";
import { createPortal } from "react-dom";
import { useContextGrid } from "~/context";
import { VideoFooterNav } from "~/pages/video/_common/footer/nav";

type TProps = TPropsWithChildren;
export const VideoFooter: FC<
  TProps
> = () => {
  const { main, footerValue } =
    useContextGrid();
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );
  if (!screen.isDimensions) return null;
  return (
    <>
      {footerValue &&
        createPortal(
          <>
            <VideoFooterNav />
            <VideoFooterLeft />

          </>,
          footerValue
        )}
    </>
  );
};
