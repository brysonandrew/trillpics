import {
  FC,
  Fragment,
  useMemo,
} from "react";
import { STEPS_COUNT } from "~/constants/music/timing";
import {
  TTimerKey,
  useAnimatedText,
} from "~/pages/video/music/record/timer/current/animated-text";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useGridCellHandler } from "~/pages/video/music/_context/init/hooks/grid-cell-color";
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
  const classes = useMemo(() => {
    return [
      "dark:bg-yellow bg-yellow1",
      "dark:bg-pink bg-teal shadow",
      "dark:bg-blue bg-pink1 shadow",
    ];
  }, []);

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
      handleGridCell((cell, index) => {
        if (
          cell &&
          index === progressStep &&
          cell.dataset.progress ===
            progressKey
        ) {
          const color =
            classes[index % 3];
          cell.className = `${color} ring-white`;
        }
      });

      audio.progressStep[progressKey] =
        progressStep;
    }

    progress[progressKey].set(0);
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
