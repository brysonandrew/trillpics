import { DirectorsModal } from "~/pages/directors-mode/modal";
import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { DirectorsModeFooter } from "~/pages/directors-mode/footer";
import { PicDirectorsMode } from "~/shell/pics/pic/directors-mode";

export const DirectorsMode = () => {
  const {
    Header,
    HeaderLeft,
    HeaderRight,
    Pics,
    picsTable,
    Footer,
    FooterLeft,
  } =
    useOutletContext<TOutletContext>();
  return (
    <>
      {/* <Pics
        picsTable={picsTable}
        PicFc={PicDirectorsMode}
      /> */}
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
