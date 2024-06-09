import { FC } from "react";
import { motion } from "framer-motion";
import { boxSize } from "~uno/rules/box/size";
import { useReadyContext } from "~/shell/ready/context";
import { LeftButtonsClear } from "~/pages/video/_root/clear";
import { HudLeftAddRandom } from "~/pages/video/_root/add-random";

export const _RootReorderControlsSides: FC =
  () => {
    const {
      main: { dragger },
      screen: { container },
    } = useReadyContext();
    const s = boxSize();
    return (
      <motion.div
        className="absolute row-space"
        style={{
          x: 0,
          height: 0,
          width: container.width+s.m,
          left: s.m05,
          bottom:-s.m3,// s.m2, // -s.m05,
          y: dragger.y075,
        }}
      >
        <HudLeftAddRandom />
        <LeftButtonsClear />
      </motion.div>
    );
  };
