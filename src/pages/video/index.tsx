import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { VideoFooter } from "~/pages/video/_common/footer";
import { Video_RootCursor } from "~/pages/video/_root/cursor";
import { HeaderLeftControls } from "~/shell/header/left/controls";
import { VideoFooterNav } from "~/pages/video/_common/footer/nav";

export const Video = () => {
  const {
    Header,
    HeaderLeft,
    HeaderRight,
    Footer,
    FooterLeft,
  } =
    useOutletContext<TOutletContext>();

  return (
    <>
      <Video_RootCursor />
      <Header>
        <HeaderLeft>
          <HeaderLeftControls />
        </HeaderLeft>
        <HeaderRight />
      </Header>
      <Footer>
        <FooterLeft>
          <VideoFooter />
        </FooterLeft>
        <VideoFooterNav />
      </Footer>
      {/* <VideosModal /> */}
    </>
  );
};
