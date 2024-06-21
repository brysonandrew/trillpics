import type { FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import clsx from "clsx";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { UStepsKey } from "~/store/state/music/types";
import { SCALE_VALUE_COUNT } from "~/constants/scales";
import { LinesVertical } from "~/components/lines/vertical";
import { box } from "~uno/rules/box";

type TProps = {
  stepsKey: UStepsKey;
};
export const ChartsGridLabelsName: FC<
  TProps
> = ({ stepsKey }) => {
  const isSynth = stepsKey === "synth";
  const { synth } = useTrillPicsStore(
    ({ synth }) => ({ synth })
  );
  const s = box;
  return (
    <div
      key={stepsKey}
      className="absolute row-start-space grow text-white text-xxxs uppercase"
    >
      {isSynth && (
        <div
          className={clsx(
            "absolute right-full top-0 -translate-x-1 px-0.75"
          )}
        >
          <BackgroundGlass />
          {`${
            (synth.midi ?? 0) +
            SCALE_VALUE_COUNT -
            1
          }`}
        </div>
      )}

      <LinesVertical />
      <div
        className={clsx(
          "absolute right-full top-0 px-1 grow bg-red grow",
       
        )}
        style={{ left: -s.m2 }}
      >
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
