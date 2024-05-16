import { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { useTrillPicsStore } from "~/store/middleware";
import { createPortal } from "react-dom";
import { useContextGrid } from "~/context";
import { VideoFooterNav } from "~/pages/video/_common/footer/nav";
import { Outlet } from "react-router";

type TProps = TPropsWithChildren;
export const VideoFooter: FC<
  TProps
> = () => {
  const { footerValue } =
    useContextGrid();
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );
  if (!screen.isDimensions) return null;
  return (
    <>
      <Outlet />
      {footerValue &&
        createPortal(
          <VideoFooterNav />,
          footerValue
        )}
    </>
  );
};
