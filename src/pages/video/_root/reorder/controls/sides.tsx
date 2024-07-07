import { FC } from "react";
import { motion } from "framer-motion";
import { box } from "~uno/rules/box";
import { useContextReady } from "~/shell/ready/context";
import { ControlsClear } from "~/pages/video/_root/controls/clear";
import { HudLeftAddRandom } from "~/pages/video/_root/controls/add-random";

export const _RootReorderControlsSides: FC =
  () => {
    const {
      main: { dragger },
      screen: { container },
    } = useContextReady();
    
    return (
      <motion.div
        className="absolute row-space"
        style={{
          x: 0,
          height: 0,
          width: container.width+box._,
          left: box._05,
          bottom:-box._3,// box._2, // -box._05,
          y: dragger.y075,
        }}
      >
        <HudLeftAddRandom />
        <ControlsClear />
      </motion.div>
    );
  };
