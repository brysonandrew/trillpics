import { FC } from "react";
import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { HomeFooter } from "~/pages/home/_footer";
import { HomeCursor } from "~/pages/home/cursor";
import { HeaderLeftControls } from "~/shell/header/left/controls";

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
      <HomeCursor />
      <Header>
        <HeaderLeft>
          <HeaderLeftControls />
        </HeaderLeft>
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
{
  /* <AnimatePresence>
        {hoverPicProps && (
          <VideoPic
            {...hoverPicProps}
            videoPics={videoPics}
            style={{
              y: scrollY,
              left:
                hoverPicProps
                  .column * table.size,
              top:
                hoverPicProps.row *
                table.size,
              ...resolveSquare(
                table.size
              ),
            }}
            {...PRESENCE_OPACITY_ANIMATE_DELAY_02}
          />
        )}
      </AnimatePresence> */
}
