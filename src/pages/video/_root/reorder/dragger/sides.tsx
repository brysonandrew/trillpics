import { FC } from "react";
import { motion } from "framer-motion";
import { box } from "~uno/rules/box";
import { useContextReady } from "~/shell/ready/context";
import { _RootReorderDragger } from "~/pages/video/_root/reorder/dragger";

export const _RootReorderDraggerSides: FC =
  () => {
    const {
      screen: { container },
    } = useContextReady();
    
    return (
      <motion.div
        className="absolute row-space"
        style={{
          x: 0,
          height: 0,
          width: container.width + box._,
          left: box._05,
          bottom: -box._6,
        }}
      >
        <_RootReorderDragger
          title="drag controls from left"
          container={container}
          left={0}
          isColumn={false}
        />
        <_RootReorderDragger
          title="drag controls from right"
          container={container}
          left={container.width}
          isColumn={false}
        />
      </motion.div>
    );
  };
