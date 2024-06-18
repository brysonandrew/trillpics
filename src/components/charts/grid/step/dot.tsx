import type { FC } from "react";
import { motion } from "framer-motion";
import { resolveSquare } from "@brysonandrew/measure";
import clsx from "clsx";
import { TChartsGridStepProps } from "~/components/charts/grid/step";
import { resolveTop } from "~/components/charts/grid/top";
import { resolvePlayVolume } from "~/hooks/music/play/volume";
import { TMusicKey } from "~/store/state/music/types";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";
import { isNumber } from "~/utils/validation/is/number";

type TProps = TChartsGridStepProps & {
  isHovering: boolean;
};

export const ChartsGridStepDot: FC<
  TProps
> = ({ isHovering, ..._props }) => {
  const {
    columnIndex,
    rowIndex,
    style,
    value,
    stepsKey,
    ...props
  } = _props;
  const isSynth = stepsKey === "synth";
  const borderRadius = boxRadius();

  const progressKey = (
    isSynth ? "midis" : "beats"
  ) as TMusicKey;

  const key = `${columnIndex}-${rowIndex}-${progressKey}`;
  const s = boxSize();

  const idleOpacity = isNumber(value)
    ? 1
    : isSynth
    ? 0.2
    : 0.28;
  return (
    <div
      className={clsx(
        "center relative"
      )}
      style={{
        ...(isSynth
          ? {
              top:
                value === null
                  ? 0
                  : resolveTop(
                      value,
                      s.m05
                    ),
            }
          : { top: 0 }),
        ...resolveSquare(s.m05),
      }}
    >
      <motion.div
        key={key}
        className={clsx("bg-white")}
        style={{
          position: "relative",
          borderRadius,
          ...resolveSquare(s.m0125),
          scale: resolvePlayVolume(
            columnIndex
          ),
        }}
        animate={{
          scale: isHovering
            ? 1.4
            : idleOpacity,
        }}
      />
    </div>
  );
};
