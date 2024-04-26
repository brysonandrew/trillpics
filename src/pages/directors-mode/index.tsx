import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { DirectorsModeFooter } from "~/pages/directors-mode/footer";

export const DirectorsMode = () => {
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
          <DirectorsModeFooter />
        </FooterLeft>
      </Footer>
      {/* <DirectorsModal /> */}
    </>
  );
};
