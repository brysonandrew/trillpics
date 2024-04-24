import { DirectorsModal } from "~/pages/directors-mode/modal";
import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { ControlsClear } from "~/pages/directors-mode/screen/clear";
import { ControlsPlayer } from "~/pages/directors-mode/screen/player";
import { ControlsShow } from "~/pages/directors-mode/screen/show";
import { DirectorsModeFooterExit } from "~/pages/directors-mode/footer/exit";
import { DirectorsModeFooter } from "~/pages/directors-mode/footer";

export const DirectorsMode = () => {
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
       
          <DirectorsModeFooter />
        </FooterLeft>
      </Footer>
      <DirectorsModal />
    </>
  );
};
