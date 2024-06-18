import { FC, Fragment } from "react";
import { CHARTS_GRID_STEP_ACTIVE_STYLE } from "~/components/charts/grid/step";
import { STEPS_COUNT } from "~/constants/music/timing";
import {
  TTimerKey,
  useAnimatedText,
} from "~/pages/video/music/record/timer/current/animated-text";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import {
  defaultGridCellHandler,
  useGridCellHandler,
} from "~/pages/video/music/_context/init/hooks/grid-cell-color";
import { TProgressKey } from "~/pages/video/music/_context/init/types";

type TProps = {
  progressKey: TProgressKey;
  timerKey: TTimerKey;
  seconds: number;
  stepsCount?: number;
};
export const VideoMusicPlaybackTimerCurrentRow: FC<
  TProps
> = ({
  progressKey,
  seconds,
  stepsCount = STEPS_COUNT,
  timerKey,
}) => {
  const { progress, audio } =
    useMusicInitContext();

  const handleGridCell =
    useGridCellHandler();
  const handleUpdate = (
    elapsedMs: number
  ) => {
    const progressValue =
      elapsedMs / 1000 / seconds;
    progress[progressKey].set(
      progressValue
    );
    const progressStep = Math.floor(
      progressValue * stepsCount
    );
    if (
      audio.progressStep[
        progressKey
      ] !== progressStep
    ) {
      if (
        audio.progressStep[
          progressKey
        ] > progressStep
      ) {
        handleGridCell();
        audio.progressStep[
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
              defaultGridCellHandler(
                prev,
                prevIndex,
                arr
              );
            }

            cell.style.opacity =
              CHARTS_GRID_STEP_ACTIVE_STYLE.opacity;
            cell.style.transition =
              CHARTS_GRID_STEP_ACTIVE_STYLE.transitionDuration;
          }
        }
      );

      audio.progressStep[progressKey] =
        progressStep;
    }

    progress[progressKey].set(0);
    audio.progressStep[progressKey] =
      -1;
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
