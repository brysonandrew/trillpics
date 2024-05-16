import { VideoFooter } from "~/pages/video/_common/footer";
import { Video_RootCursor } from "~/pages/video/_root/cursor";

export const Video = () => {
  // const { Footer, FooterLeft } =
  //   useOutletContext<TOutletContext>();

  return (
    <>
      <Video_RootCursor />
      <VideoFooter />
      {/* <Footer>
        <FooterLeft>
          <VideoFooter />
        </FooterLeft>
        <VideoFooterNav />
      </Footer> */}
      {/* <VideosModal /> */}
    </>
  );
};
