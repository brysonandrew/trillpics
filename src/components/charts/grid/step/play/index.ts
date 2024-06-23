import { TMidiValue } from "~/hooks/music/midis/types";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import {
  CHARTS_GRID_STEP_ACTIVE_STYLE,
  CHARTS_GRID_STEP_EMPTY_STYLE,
} from "~/pages/video/music/_context/init/grid-cell/constants";
import { gridCellStyleEmptyHandler } from "~/pages/video/music/_context/init/grid-cell/style/empty";
import { useGridCellsUpdateStyle } from "~/pages/video/music/_context/init/grid-cell/style/update/hook";
import { TGridCellsBaseConfig } from "~/pages/video/music/_context/init/grid-cell/types";
import { useContextMusicReady } from "~/pages/video/music/_context/ready";
import { useTrillPicsStore } from "~/store/middleware";
import { TMusicKey } from "~/store/state/music/types";
import { isNull } from "~/utils/validation/is/null";
type TStepStyle =
  | typeof CHARTS_GRID_STEP_ACTIVE_STYLE
  | typeof CHARTS_GRID_STEP_EMPTY_STYLE;

type TPlaybackHandler = (
  next?: TStepStyle
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
  const { context } =
    useContextMusicInit();

  const updateStyle =
    useGridCellsUpdateStyle<T>({
      ...config,
      musicKey,
    });

  const lookup = useContextMusicReady();
  const { synth } = useTrillPicsStore(
    ({ synth }) => ({ synth })
  );
  const { gridCellsRecord } =
    useContextMusicInit();

  const stop: TPlaybackHandler = (
    next = CHARTS_GRID_STEP_EMPTY_STYLE
  ) => {
    updateStyle(next);

    (
      (lookup[musicKey] as any)[
        stepsKey
      ] as any
    ).stop();
  };

  const play = (
    next = CHARTS_GRID_STEP_ACTIVE_STYLE
  ) => {
    if (isNull(midi)) return;

    updateStyle(next);

    const cells =
      gridCellsRecord[musicKey][
        rowIndex
      ];
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

      (lookup[musicKey] as any)[
        stepsKey
      ].play(
        context.currentTime,
        midi,
        {
          ...synth,
          duration: 1,
          onEnded: stop,
        }
      );
    }
  };
  return { play, stop };
};
