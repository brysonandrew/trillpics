import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { VideoSchedulerReorder } from "~/pages/video/scheduler/reorder";
import { PortalBody } from "@brysonandrew/layout-portal";
import { VideoFooterNav } from "~/pages/video/_common/footer/nav";
import { VideoFooterLeft } from "~/pages/video/_common/footer/left";

export const VideoScheduler = () => {
  const {
    Footer,
    FooterLeft,
  } =
    useOutletContext<TOutletContext>();

  return (
    <PortalBody>
      <VideoSchedulerReorder />
      <Footer>
        <FooterLeft>
          <VideoFooterLeft />
        </FooterLeft>
        <VideoFooterNav />
      </Footer>
    </PortalBody>
  );
};
