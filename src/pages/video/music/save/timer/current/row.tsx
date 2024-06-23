import { FC, Fragment } from "react";
import { STEPS_COUNT } from "~/constants/music/timing";
import {
  TTimerKey,
  useAnimatedText,
} from "~/pages/video/music/save/timer/current/animated-text";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useGridCellDrill } from "~/pages/video/music/_context/init/grid-cell/drill";
import { gridCellStyleActiveHandler } from "~/pages/video/music/_context/init/grid-cell/style/active";
import { gridCellStyleEmptyHandler } from "~/pages/video/music/_context/init/grid-cell/style/empty";
import { TProgressKey } from "~/pages/video/music/_context/init/types";

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
  const { progress, audio } =
    useContextMusicInit();

  const handleGridCell =
    useGridCellDrill();
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
              gridCellStyleEmptyHandler(
                prev,
                prevIndex,
                arr
              );
            }
            gridCellStyleActiveHandler(
              cell,
              index,
              arr
            );
          }
        }
      );

      audio.progressStep[progressKey] =
        progressStep;
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
