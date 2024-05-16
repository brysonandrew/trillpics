import { FC, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { TDimensions } from "@brysonandrew/config-types";
import clsx from "clsx";
import { TypographyBordered } from "~/components/typography/bordered";
import { LinesVertical } from "~/pages/video/_common/footer/nav/lines/vertical";
import { PicsFloatingShuffle } from "~/pics/floating/shuffle";
import { HeaderLeft } from "~/pics/header/left";
import { HeaderRight } from "~/pics/header/right";
import { PicsHeaderScrollTop } from "~/pics/header/scroll-top";
import { TMeasureContainerResult } from "~/shell/init/container";
import { HeaderCenter } from "~/pics/header/center";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { useContextGrid } from "~/context";
import { HeaderSubtitle } from "~/pics/header/subtitle";
import { PillBStill } from "~/components/buttons/pill/b/still";
import { IconsCross } from "~/components/icons/cross";
import { boxSize } from "~/constants/box/style/size";
import { MainRight } from "~/pics/hud/main/right";
import { Offline } from "~/pics/header/right/offline";
import { Network } from "@brysonandrew/network";
import { HideControls } from "~/pics/header/right/zen-mode";

type TProps = {
  isVerticalScroll: boolean;
  dimensions: {
    screen: TDimensions;
    container: Extract<
      TMeasureContainerResult,
      { isDimensions: true }
    >;
  };
};
export const Hud: FC<TProps> = ({
  isVerticalScroll,
  dimensions: { screen, container },
}) => {
  const { fonts, main } =
    useContextGrid();
  const [bounds, setBounds] =
    useState<DOMRect | null>(null);

  const size = boxSize({ size: "sm" });
  return (
    <div
      className="absolute w-0 bg-red"
      style={{
        left: container.left,
        top: container.top,
        height: container.height,
      }}
    >
      <div
        className={clsx(
          "absolute top-0 left-0 h-0 row gap-6 bg-red"
        )}
        style={{
          width: container.width,
        }}
      >
        <AnimatePresence>
          <header
            className={clsx(
              "row-start-space gap-6"
            )}
          >
            {fonts["Saiba 45"]
              .active && (
              <div
                className="absolute top-0 left-0"
                ref={(instance) => {
                  if (
                    instance &&
                    !bounds
                  ) {
                    const rect =
                      instance.getBoundingClientRect();
                    setBounds(rect);
                  }
                }}
              >
                <HeaderLeft />
              </div>
            )}
            {bounds && (
              <div
                key="header-right"
                className="absolute row gap-6 h-0 top-0 bg-blue"
                style={{
                  left: bounds.width,
                  width:
                    container.width -
                    bounds.width,
                  top: size.size / 2,
                }}
              >
                <HeaderCenter />
                <HeaderRight />
              </div>
            )}
          </header>
          {bounds && (
            <motion.div
              key="main-right"
              className="absolute column gap-6 w-0 top-0 w right-0 bg-green"
              style={{
                height:
                  container.height -
                  size.size,
                right: size.size / 2,
                paddingTop:
                  size.size * 1.5,
              }}
              {...PRESENCE_OPACITY}
            >
              <PicsHeaderScrollTop />
              <LinesVertical classValue="flex opacity-50" />

              <HideControls />
              <LinesVertical classValue="opacity-50" />
              <Network
                OfflineFC={Offline}
              />
            </motion.div>
          )}
          {bounds && (
            <motion.div
              key="main-left"
              className="absolute column gap-6 w-0 top-0 bg-orange"
              style={{
                left: size.size / 2,
                top: bounds.height,
                height:
                  container.height -
                  bounds.height,
              }}
              {...PRESENCE_OPACITY}
            >
              <LinesVertical classValue="opacity-50" />
              <PicsFloatingShuffle />
              <LinesVertical classValue="opacity-50" />
              <PillBStill
                title="x"
                Icon={IconsCross}
              />
            </motion.div>
          )}
          {bounds && (
            <div
              key="footer"
              className="absolute row-start h-0 top-0 bg-blue"
              style={{
                left: bounds.width,
                width:
                  container.width -
                  bounds.width,
              }}
            >
              <footer className="fixed left-1/2 -translate-1/2 bottom-0 container h-0 z-10">
                <div
                  className="relative bottom-6 row-space w-full h-0"
                  ref={(instance) => {
                    if (
                      instance &&
                      !main.ui.footer
                    ) {
                      main.ui.footer =
                        instance;
                    }
                  }}
                >
                  <div
                    className="absolute left-0 bottom-0 column-start gap-6"
                    // ref={(instance) => {
                    //   if (
                    //     instance &&
                    //     !main.ui.footer
                    //   ) {
                    //     main.ui.footer =
                    //       instance;
                    //   }
                    // }}
                  ></div>
                </div>
              </footer>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
