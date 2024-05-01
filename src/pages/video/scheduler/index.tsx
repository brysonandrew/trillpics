import { useOutletContext } from "react-router";
import { VideoFooter } from "~/pages/video/_common/footer";
import { TOutletContext } from "~/shell";

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
    <>
      <Header>
        <HeaderLeft />
        <HeaderRight />
      </Header>
      <Footer>
        <FooterLeft>
          <VideoFooter />
        </FooterLeft>
      </Footer>
    </>
  );
};
