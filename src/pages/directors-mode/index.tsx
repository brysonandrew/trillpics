import {
  AnimatePresence,
  useTransform,
} from "framer-motion";
import { useOutletContext } from "react-router";
import { TOutletContext } from "~/shell";
import { DirectorsModeFooter } from "~/pages/directors-mode/footer";
import { useTrillPicsStore } from "~/store";
import { DirectorsModePic } from "~/pages/directors-mode/pic";
import { useVirtualizeScroll } from "~/shell/pics/virtualize/use-scroll";
import { resolveSquare } from "@brysonandrew/measure";
import { PRESENCE_OPACITY_ANIMATE_DELAY_02 } from "~/constants/animation";

export const DirectorsMode = () => {
  const {
    Header,
    HeaderLeft,
    HeaderRight,
    Footer,
    FooterLeft,
  } =
    useOutletContext<TOutletContext>();
  const d = useVirtualizeScroll();
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
          <DirectorsModePic
            {...hoverPicProps}
            videoPics={videoPics}
            style={{
              y: scroll.yOffset,
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
          <DirectorsModeFooter />
        </FooterLeft>
      </Footer>
      {/* <DirectorsModal /> */}
    </>
  );
};
