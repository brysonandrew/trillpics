import { motion } from "framer-motion";
import { resolveSquare } from "@brysonandrew/measure";
import clsx from "clsx";
import { TChartsGridStepProps } from "~/components/charts/grid/step";
import { resolvePlayVolume } from "~/hooks/music/play/volume";
import { TMusicKey } from "~/store/state/music/types";
import { boxRadius } from "~uno/rules/box/radius";
import { box } from "~uno/rules/box";
import { isNumber } from "~/utils/validation/is/number";
import { TSequenceOptions } from "~/pages/video/music/synth/sequence/types";
import { TSynthConfig } from "~/pages/video/music/synth/types";

type TProps<T extends TMusicKey> =
  TSynthConfig &
    TSequenceOptions &
    TChartsGridStepProps<T> & {
      isHovering: boolean;
    };

export const ChartsGridStepDot = <
  T extends TMusicKey
>({
  duration,
  isHovering,
  ..._props
}: TProps<T>) => {
  const {
    columnIndex,
    rowIndex,
    style,
    value,
    stepsKey,
    musicKey: progressKey,
  } = _props;
  const isSynth = stepsKey === "synth";
  const borderRadius = boxRadius();

  const key = `${columnIndex}-${rowIndex}-${progressKey}`;
  

  const idleOpacity = isNumber(value)
    ? 1
    : isSynth
    ? 1
    : 0.28;
  return (
    <div
      className={clsx(
        "center relative pointer-events-none"
      )}
      style={{
        // left: `calc(50%-${box.m025}px)`,
        opacity:
          value === null ? 0.25 : 1,
        ...style,
        ...resolveSquare(box.m05),
      }}
    >
      <motion.div
        key={key}
        className={clsx("bg-white")}
        style={{
          position: "relative",
          borderRadius,
          ...resolveSquare(box.m0125),

          scale:
            0.5 +
            resolvePlayVolume(
              columnIndex
            ) /
              2,
        }}
        initial={false}
        animate={{
          scale: isHovering
            ? 1.4
            : idleOpacity,
        }}
      />
    </div>
  );
};
