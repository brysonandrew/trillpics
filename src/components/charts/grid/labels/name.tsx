import type { FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import clsx from "clsx";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { UStepsKey } from "~/store/state/music/types";

type TProps = {
  stepsKey: UStepsKey;
  stepsCount: number;
};
export const ChartsGridLabelsName: FC<
  TProps
> = ({ stepsKey, stepsCount }) => {
  const isSynth = stepsKey === "synth";
  const { synth } = useTrillPicsStore(
    ({ synth }) => ({ synth })
  );
  return (
    <div
      key={stepsKey}
      className="relative row-start-space text-white text-xxxs uppercase h-full"
    >
      <div
        className={clsx(
          "absolute right-full bottom-0 -translate-x-1 px-0.75",
          isSynth
            ? "-translate-y-0.5"
            : "-translate-y-2.5"
        )}
      >
        <BackgroundGlass />
        <div className="row gap-1">
          {isSynth ? (
            <>
              <div>midi</div>
              {`${synth.midi}`}
            </>
          ) : (
            stepsKey
          )}
        </div>
      </div>
    </div>
  );
};
