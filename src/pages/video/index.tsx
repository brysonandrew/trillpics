import {
  AnimatePresence,
} from "framer-motion";
import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { VideoFooter } from "~/pages/video/_common/footer";
import { useTrillPicsStore } from "~/store";
import { VideoPic } from "~/pages/video/_common/pic";
import { useVirtualizeContext } from "~/shell/pics/virtualize/context";
import { resolveSquare } from "@brysonandrew/measure";
import { PRESENCE_OPACITY_ANIMATE_DELAY_02 } from "~/constants/animation";

export const Video = () => {
  const {
    Header,
    HeaderLeft,
    HeaderRight,
    Footer,
    FooterLeft,
  } =
    useOutletContext<TOutletContext>();
  const { scrollY } =
    useVirtualizeContext();
  const {
    table,
    hoverPicProps,
    videoPics,
  } = useTrillPicsStore(
    ({
      table,
      hoverPicProps,
      videoPics,
    }) => ({
      table,
      hoverPicProps,
      videoPics,
    })
  );
  return (
    <>
      <AnimatePresence>
        {hoverPicProps && (
          <VideoPic
            {...hoverPicProps}
            videoPics={videoPics}
            style={{
              y: scrollY,
              left:
                hoverPicProps.cell
                  .column * table.size,
              top:
                hoverPicProps.cell.row *
                table.size,
              ...resolveSquare(
                table.size
              ),
            }}
            {...PRESENCE_OPACITY_ANIMATE_DELAY_02}
          />
        )}
      </AnimatePresence>
      <Header>
        <HeaderLeft />
        <HeaderRight />
      </Header>
      <Footer>
        <FooterLeft>
          <VideoFooter />
        </FooterLeft>
      </Footer>
      {/* <DirectorsModal /> */}
    </>
  );
};
