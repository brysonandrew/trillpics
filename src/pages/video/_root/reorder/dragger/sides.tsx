import { FC } from "react";
import { motion } from "framer-motion";
import { boxSize } from "~uno/rules/box/size";
import { useReadyContext } from "~/shell/ready/context";
import { _RootReorderDragger } from "~/pages/video/_root/reorder/dragger";

export const _RootReorderDraggerSides: FC =
  () => {
    const {
      screen: { container },
    } = useReadyContext();
    const s = boxSize();
    return (
      <motion.div
        className="absolute row-space"
        style={{
          x: 0,
          height: 0,
          width: container.width + s.m,
          left: s.m05,
          bottom: -s.m4,
        }}
      >
        <_RootReorderDragger
          title="drag controls from left"
          container={container}
          bottom={s.m05}
          left={0}
          isColumn={false}
        />
        <_RootReorderDragger
          title="drag controls from right"
          container={container}
          bottom={s.m05}
          left={container.width}
          isColumn={false}
        />
      </motion.div>
    );
  };
