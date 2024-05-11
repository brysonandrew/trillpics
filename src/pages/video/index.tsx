import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { VideoFooter } from "~/pages/video/_common/footer";
import { Video_RootCursor } from "~/pages/video/_root/cursor";

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
        <HeaderLeft />
        <HeaderRight />
      </Header>
      <Footer>
        <FooterLeft>
          <VideoFooter />
        </FooterLeft>
      </Footer>
      {/* <VideosModal /> */}
    </>
  );
};
