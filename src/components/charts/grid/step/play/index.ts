import {
  TMidiValue,
  TPlayMidisOptions,
} from "~/hooks/music/midis/types";
import {
  isBeatsKey,
  isMidisKey,
} from "~/hooks/music/play/validators";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { useContextMusicReady } from "~/pages/video/music/_context/ready";
import { TMusicKey } from "~/store/state/music/types";
import { resolveMidiNumber } from "~/utils/midi";
import { isNull } from "~/utils/validation/is/null";
import { useGridsUpdateStyle } from "~/hooks/grid/style/update/hook";
import {
  CHARTS_GRID_STEP_EMPTY_STYLE,
  CHARTS_GRID_STEP_ACTIVE_STYLE,
} from "~/pages/video/music/_context/init/refs/grid/constants";
import { gridStyleEmptyHandler } from "~/hooks/grid/style/empty";
import {
  TGridsBaseConfig,
  TGridsStepStyle,
} from "~/pages/video/music/_context/init/refs/grid/types";

type TPlaybackHandler = (
  next?: TGridsStepStyle
) => void;
export const useStepPlay = <
  T extends TMusicKey
>(
  midi: TMidiValue,
  config: TGridsBaseConfig<T>
) => {
  const {
    stepsKey,
    rowIndex,
    columnIndex,
    musicKey,
  } = config;
  const {
    audio: { context },
    schedule: { record },
  } = useMusicRefs();

  const updateStyle =
    useGridsUpdateStyle<T>({
      ...config,
      musicKey,
    });

  const resolvePlayer = () => {
    if (isBeatsKey(stepsKey)) {
      return beats[stepsKey];
    }
    if (isMidisKey(stepsKey)) {
      return midis[stepsKey];
    }
  };

  const { beats, midis } =
    useContextMusicReady();
  const { grid, schedule } =
    useMusicRefs();

  const stop: TPlaybackHandler = (
    next = CHARTS_GRID_STEP_EMPTY_STYLE
  ) => {
    const player = resolvePlayer();
    if (!player) return;
    player.stop();
    updateStyle(next);
  };

  const handleEnd = () => {
    stop();
  };

  const play = (
    next = CHARTS_GRID_STEP_ACTIVE_STYLE
  ) => {
    if (
      schedule.record.playingKeys
        .length > 0
    )
      return;
    if (isNull(midi)) return;
    const player = resolvePlayer();
    if (!player) return;
    const playOptions: TPlayMidisOptions =
      {
        // ...synth,
        duration: 1,
        onEnded: handleEnd,
      };
    player.play(
      context.currentTime,
      resolveMidiNumber(midi),
      playOptions
    );

    updateStyle(next);

    const cells =
      grid.record[musicKey][rowIndex];
    if (!cells) return;
    const cell = cells[columnIndex];
    if (
      grid.record !== null &&
      cell !== null
    ) {
      gridStyleEmptyHandler(
        cell,
        columnIndex,
        cells
      );
    }
  };
  return { play, stop };
};
