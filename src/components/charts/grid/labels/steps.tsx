import type { FC } from "react";
import clsx from "clsx";
import { UStepsKey } from "~/store/state/music/types";

type TProps = {
  stepsKey: UStepsKey;
  stepsCount: number;
};
export const ChartsGridLabelsSteps: FC<
  TProps
> = ({ stepsKey, stepsCount }) => {
  return (
    <div
      className={clsx(
        "absolute bottom-full right-0 text-xxxs uppercase -translate-x-1",
        stepsKey === "synth"
          ? "-translate-y-0.5"
          : "-translate-y-4"
      )}
    >
      <div className="row gap-1">
        <>
          {stepsKey ===
          "synth" ? null : (
            <>
              <div>beats</div>
              {stepsCount / 4},
            </>
          )}
          <div>steps</div>
          {stepsCount}
        </>
      </div>
    </div>
  );
};
