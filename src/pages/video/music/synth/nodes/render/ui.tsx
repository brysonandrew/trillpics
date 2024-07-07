import type { FC } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { TGraphLayoutKey } from "~/pages/video/music/synth/nodes/types";
import { box } from "~uno/rules/box";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";
import { resolveSquare } from "@brysonandrew/measure";
import { TIconsSvgProps } from "~/components/icons/svg";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";

export const renderUi = (
  key: TGraphLayoutKey,
  title: string,
  Icon: FC<TIconsSvgProps>,
  ui: JSX.Element
) => {
  const { layout } = useMusicRefs();
  return (
    <>
      {layout.graph[key]?.current &&
        createPortal(
          <motion.div
            className="relative"
            layout
          >
            <motion.div
              className="absolute column-end right-full h-full"
              style={{
                width:
                  box._2 + box._025,
                top:
                  box._0125 +
                  box._00625,
                marginRight: box._05,
                bottom: box._0125,
                gap: box._0125,
              }}
            >
              <TypographyXxxs>
                {title}
              </TypographyXxxs>
              <Icon
                {...resolveSquare(
                  box._05
                )}
              />
            </motion.div>
            <LinesHorizontalLight
              positionClass="absolute"
              style={{ top: box._025, left: -box._0375 }}
            />
            <motion.div
              className="relative row-wrap items-start"
              layout
              style={{
                gap: box._0125,
              }}
            >
              {ui}
            </motion.div>
          </motion.div>,
          layout.graph[key].current
        )}
    </>
  );
};
