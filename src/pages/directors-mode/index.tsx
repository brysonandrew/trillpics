import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { DirectorsModeFooter } from "~/pages/directors-mode/footer";
import { useTrillPicsStore } from "~/store";
import { DirectorsModePic } from "~/pages/directors-mode/pic";

export const DirectorsMode = () => {
  const {
    Header,
    HeaderLeft,
    HeaderRight,
    Footer,
    FooterLeft,
  } =
    useOutletContext<TOutletContext>();
  const { hoverPicProps } =
    useTrillPicsStore(
      ({ hoverPicProps }) => ({
        hoverPicProps,
      })
    );
    console.log(hoverPicProps)
  return (
    <>
      {hoverPicProps && (
        <DirectorsModePic
          {...hoverPicProps}
        />
      )}
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
