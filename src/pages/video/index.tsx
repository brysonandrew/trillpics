import {
  AnimatePresence,
  useTransform,
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
  const d = useVirtualizeContext();
// console.log("▁▁▁▁▂▂▂▂▃▃▃▃▄▄▄▅▅▅▅▆▆▆▆▇▇▇▇██▓▒░ 🧨 ░▒▓█▓▒░ 🧨 ░▒▓██▇▇▇▇▆▆▆▆▅▅▅▅▄▄▄▃▃▃▃▂▂▂▂▁▁▁▁");
// console.dir(d);
// console.log("██████████████▓▒░ 🧨 ░▒ line: 23, file: index.tsx ▓▒░ 🧨 ░▒██████████████");
  const { scroll } = d;
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
              y: scroll.y,
              left:
                hoverPicProps.columnIndex *
                table.size,
              top:
                hoverPicProps.rowIndex *
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
