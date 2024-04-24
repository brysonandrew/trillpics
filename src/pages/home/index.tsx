import { FC } from "react";
import { FadeV } from "@brysonandrew/fade-edge";
import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { HomeFooter } from "~/pages/home/footer";
import { VideoPicsCounter } from "~/shell/screen/video-pic-counter";

export const Home: FC = () => {
  const {
    Header,
    HeaderLeft,
    HeaderRight,
    Screen,
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
          <HomeFooter />
        </FooterLeft>
      </Footer>
    </>
  );
};
