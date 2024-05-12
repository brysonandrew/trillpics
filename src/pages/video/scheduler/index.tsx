import { useOutletContext } from "react-router";
import { VideoFooter } from "~/pages/video/_common/footer";
import { TOutletContext } from "~/shell";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { GRADIENT_MESH_DARK } from "~app/color/gradient/mesh";
import { VideoSchedulerReorder } from "~/pages/video/scheduler/reorder";
import { PortalBody } from "@brysonandrew/layout-portal";
import { VideoFooterNav } from "~/pages/video/_common/footer/nav";

export const VideoScheduler = () => {
  const {
    Header,
    HeaderLeft,
    HeaderRight,
    Footer,
    FooterLeft,
  } =
    useOutletContext<TOutletContext>();

  return (
    <PortalBody>
      <VideoSchedulerReorder />
      <Header>
        <HeaderLeft />
        <HeaderRight />
      </Header>
      <Footer>
        <FooterLeft>
          <VideoFooter />
        </FooterLeft>
        <VideoFooterNav />
      </Footer>
    </PortalBody>
  );
};
