import { VideoSchedulerReorder } from "~/pages/video/scheduler/reorder";
import { PortalBody } from "@brysonandrew/layout-portal";
import { useContextGrid } from "~/context";
import { createPortal } from "react-dom";

export const VideoScheduler = () => {
  const { headerValue } =
    useContextGrid();
  return (
    <PortalBody>
                  <VideoSchedulerReorder />,

      {/* {headerValue && (
        <>
          {createPortal(
            <VideoSchedulerReorder />,
            headerValue
          )}
        </>
      )} */}
    </PortalBody>
  );
};
