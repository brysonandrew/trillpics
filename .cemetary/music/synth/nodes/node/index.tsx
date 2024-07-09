import type {
  FC,
  PropsWithChildren,
} from "react";
import { motion } from "framer-motion";
import { box } from "~uno/rules/box";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { TGraphNodeRef, UGraphNodeWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
import { SynthNodeTitle } from "~/pages/video/music/synth/nodes/node/title/text";
import { TSynthNodeTitleFc } from "~/pages/video/music/synth/nodes/node/title/types";

type TProps = PropsWithChildren<{
  node: UGraphNodeWithId;
  SynthNodeTitleFc?: TSynthNodeTitleFc;
}>;
export const SynthNode: FC<TProps> = ({
  node,
  SynthNodeTitleFc = SynthNodeTitle,
  children,
}) => {
  return (
    <motion.div
      className="relative"
      layout
      
    >
      
        <SynthNodeTitleFc
        
        node={node}
        className="absolute column-end right-full h-full"
        style={{
          width: box._2 - box._025,
          top: box._0125 + box._00625,
          marginRight: box._05,
          bottom: box._0125,
          gap: box._0125,
        }}
        
        />
      <LinesHorizontalLight
        positionClass="absolute"
        style={{
          top: box._025,
          left: -box._0375,
        }}
      />
      <motion.div
        className="relative row-wrap items-start"
        layout
        style={{
          gap: box._0125,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
