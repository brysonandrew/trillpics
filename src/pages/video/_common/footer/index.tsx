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
  const {
    footerValue,
    picValue,
    updatePic,
  } = useContextGrid();

  return (
    <>
      <Outlet />
      {footerValue &&
        createPortal(
          <_CommonReorder>
            <div
              ref={(instance) => {
                if (
                  instance &&
                  !picValue
                ) {
                  updatePic(instance);
                }
              }}
            />
          </_CommonReorder>,
          footerValue
        )}
    </>
  );
};
