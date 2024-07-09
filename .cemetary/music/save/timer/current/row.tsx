import { FC, Fragment } from "react";
import { STEPS_COUNT } from "~/constants/music/timing";
import {
  TTimerKey,
  useAnimatedText,
} from "~/pages/video/music/save/timer/current/animated-text";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { useGridDrill } from "~/hooks/grid/drill";
import { gridStyleEmptyHandler } from "~/hooks/grid/style/empty";
import { TProgressKey } from "~/pages/video/music/_context/refs/progress/types";
import { gridStyleActiveHandler } from "~/hooks/grid/style/active";

type TProps = {
  progressKey: TProgressKey;
  timerKey: TTimerKey;
  seconds: number;
  stepsCount?: number;
};
export const VideoMusicSaveTimerCurrentRow: FC<
  TProps
> = ({
  progressKey,
  seconds,
  stepsCount = STEPS_COUNT,
  timerKey,
}) => {
  const { progress, audio, schedule } =
    useMusicRefs();

  const handleGridCell = useGridDrill();
  const handleUpdate = (
    elapsedMs: number
  ) => {
    const progressValue =
      elapsedMs / 1000 / seconds;
    progress[progressKey].set(
      progressValue
    );

    const progressStep =
      Math.floor(
        progressValue * stepsCount
      ) % stepsCount;
    if (
      schedule.progressStep[
        progressKey
      ] !== progressStep
    ) {
      if (
        schedule.progressStep[
          progressKey
        ] > progressStep
      ) {
        handleGridCell();
        schedule.progressStep[
          progressKey
        ] = -1;
        return;
      }
      handleGridCell(
        (cell, index, arr) => {
          if (
            cell &&
            index === progressStep &&
            cell.dataset.progress ===
              progressKey
          ) {
            const prevIndex = index - 1;
            const prev = arr[prevIndex];
            if (prev) {
              gridStyleEmptyHandler(
                prev,
                prevIndex,
                arr
              );
            }
            gridStyleActiveHandler(
              cell,
              index,
              arr
            );
          }
        }
      );

      schedule.progressStep[
        progressKey
      ] = progressStep;
    }

    // progress[progressKey].set(0);
    // audio.progressStep[progressKey] =
    //   -1;
  };
  const text = useAnimatedText(
    handleUpdate
  );
  return (
    <>
      {text[timerKey].map(
        (v, index) => (
          <Fragment key={`${index}`}>
            <div
              className="text-center"
              style={{ width: 14 }}
              ref={(instance) => {
                if (instance && !v) {
                  text[timerKey][
                    index
                  ] = instance;
                }
              }}
            />
          </Fragment>
        )
      )}
    </>
  );
};
