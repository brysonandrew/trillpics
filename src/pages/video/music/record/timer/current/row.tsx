import {
  FC,
  Fragment,
  useMemo,
} from "react";
import { STEPS_COUNT } from "~/constants/music/steps";
import {
  TTimerKey,
  useAnimatedText,
} from "~/pages/video/music/record/timer/current/animated-text";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useGridCellHandler } from "~/pages/video/music/_context/init/hooks/grid-cell-color";

type TProps = {
  timerKey: TTimerKey;
  seconds: number;
};
export const VideoMusicPlaybackTimerCurrentRow: FC<
  TProps
> = ({ timerKey, seconds }) => {
  const { saveProgress, audio } =
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
    const progress =
      elapsedMs / 1000 / seconds;
    const progressStep = Math.floor(
      progress * STEPS_COUNT
    );
    if (
      audio.currentStep !== progressStep
    ) {
      if (
        audio.currentStep > progressStep
      ) {
        handleGridCell();
      }
      handleGridCell((cell, index) => {
        if (
          cell &&
          index === progressStep
        ) {
          const color =
            classes[index % 3];
          cell.className = `${color} ring-white`;
        }
      });

      audio.currentStep = progressStep;
    }
    saveProgress.set(progress);
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
