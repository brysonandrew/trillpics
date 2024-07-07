import { resolveSquare } from "@brysonandrew/measure";
import clsx from "clsx";
import { TChartsGridStepProps } from "~/components/charts/grid/step";
import { resolvePlayVolume } from "~/hooks/music/play/volume";
import { TMusicKey } from "~/store/state/music/types";
import { boxRadius } from "~uno/rules/box/radius";
import { box } from "~uno/rules/box";
import { TSequenceOptions } from "~/pages/video/music/synth/composition/sequence/types";
import { ChartsGridStepDotShape } from "~/components/charts/grid/step/dot/shape";
import { TSynthOptions } from "react-synthwave";

type TProps<T extends TMusicKey> =
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

  // const idleOpacity = isNumber(value)
  //   ? 1
  //   : isSynth
  //   ? 1
  //   : 0.28;
  return (
    <div
      className={clsx(
        "center relative pointer-events-none"
      )}
      style={{
        // left: `calc(50%-${box._025}px)`,
        opacity:
          value === null ? 0.25 : 1,
          ...style,
          ...resolveSquare(box._05),
      }}
    >
      <ChartsGridStepDotShape
        isHovering={isHovering}
        style={{
          borderRadius,
          ...resolveSquare(box._0125),
          scale:
            0.5 +
            resolvePlayVolume(
              columnIndex
            ) /
              2,
        }}
      />
    </div>
  );
};
