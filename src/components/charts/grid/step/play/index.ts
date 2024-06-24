import { lookup } from "dns";
import {
  TMidiValue,
  TPlayMidisOptions,
} from "~/hooks/music/midis/types";
import {
  isBeatsKey,
  isMidisKey,
} from "~/hooks/music/play/validators";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import {
  CHARTS_GRID_STEP_ACTIVE_STYLE,
  CHARTS_GRID_STEP_EMPTY_STYLE,
} from "~/pages/video/music/_context/init/grid-cell/constants";
import { gridCellStyleEmptyHandler } from "~/pages/video/music/_context/init/grid-cell/style/empty";
import { useGridCellsUpdateStyle } from "~/pages/video/music/_context/init/grid-cell/style/update/hook";
import {
  TGridCellsBaseConfig,
  TGridCellsStepStyle,
} from "~/pages/video/music/_context/init/grid-cell/types";
import { useContextMusicReady } from "~/pages/video/music/_context/ready";
import { useTrillPicsStore } from "~/store/middleware";
import { TMusicKey } from "~/store/state/music/types";
import { resolveMidiNumber } from "~/utils/midi";
import { isNull } from "~/utils/validation/is/null";

type TPlaybackHandler = (
  next?: TGridCellsStepStyle
) => void;
export const useStepPlay = <
  T extends TMusicKey
>(
  midi: TMidiValue,
  config: TGridCellsBaseConfig<T>
) => {
  const {
    stepsKey,
    rowIndex,
    columnIndex,
    musicKey,
  } = config;
  const { context, stepsRecord:{} } =
    useContextMusicInit();

  const updateStyle =
    useGridCellsUpdateStyle<T>({
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

  // const {  } = useTrillPicsStore(
  //   ({  }) => ({ synth })
  // );
  const { gridCellsRecord } =
    useContextMusicInit();

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
    if (isNull(midi)) return;
    const player = resolvePlayer();
    if (!player) return;
    const playOptions: TPlayMidisOptions =
      {
        ...synth,
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
      gridCellsRecord[musicKey][
        rowIndex
      ];
    if (!cells) return;
    const cell = cells[columnIndex];
    if (
      gridCellsRecord !== null &&
      cell !== null
    ) {
      gridCellStyleEmptyHandler(
        cell,
        columnIndex,
        cells
      );
    }
  };
  return { play, stop };
};
