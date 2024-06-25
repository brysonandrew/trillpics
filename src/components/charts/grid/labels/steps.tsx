import type { FC } from "react";
import clsx from "clsx";
import { UStepsKey } from "~/store/state/music/types";
import { useTrillPicsStore } from "~/store/middleware";
import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";
import { useMusicRefs } from "~/pages/video/music/_context/init";

type TProps = {
  stepsKey: UStepsKey;
  stepsCount: number;
};
export const ChartsGridLabelsSteps: FC<
  TProps
> = ({ stepsKey, stepsCount }) => {
  // const { sequence } =
  //   useTrillPicsStore(
  //     ({ sequence }) => ({ sequence })
  //   );
  const {schedule:{record:{sequence}}} = useMusicRefs()
  const seconds =
    useAudioSeconds();
  const secondsPerBar =
    seconds.toFixed(2);

  const durationPerBeat = (
    (seconds / stepsCount) *
    sequence.duration
  ).toFixed(2);
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
          {stepsKey === "synth" ? (
            <>
              <div>
                duration (seconds)
              </div>
              {secondsPerBar} per bar,
              {durationPerBeat} per beat
            </>
          ) : (
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
