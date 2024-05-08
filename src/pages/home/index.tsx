import { FC } from "react";
import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { HomeFooter } from "~/pages/home/_footer";

export const Home: FC = () => {
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
      {/* <Header>
        <HeaderLeft />
        <HeaderRight />
      </Header> */}
      <Footer>
        <FooterLeft>
          <HomeFooter />
        </FooterLeft>
      </Footer>
    </>
  );
};
