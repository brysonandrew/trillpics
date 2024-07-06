import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { TUseIdsResult } from "~/pages/video/music/modulators/ids";
import { ModulatorsNumbers } from "~/pages/video/music/modulators/inputs/numbers";
import { box } from "~uno/rules/box";
import { motion } from "framer-motion";

type TProps = TDivProps & {
  id: string;
  ids: TUseIdsResult;
};
export const ModulatorsInputs: FC<
  TProps
> = ({ style, ...props }) => {
  return (
    <motion.div
      id={props.ids.started.inputs}
      className="relative w-full row"
      style={{
        gap: box.m00625,
        ...style,
      }}
    >
      <ModulatorsNumbers {...props} />
    </motion.div>
  );
};
