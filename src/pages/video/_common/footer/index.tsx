import { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { createPortal } from "react-dom";
import { useContextGrid } from "~/context";
import { Outlet } from "react-router";
import { _CommonReorder } from "~/pages/video/_common/reorder";

type TProps = TPropsWithChildren;
export const VideoFooter: FC<
  TProps
> = () => {
  const { footerValue } =
    useContextGrid();

  return (
    <>
      <Outlet />
      {footerValue &&
        createPortal(
          <_CommonReorder />,
          footerValue
        )}
    </>
  );
};
