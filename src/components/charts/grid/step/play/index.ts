import {
  CHARTS_GRID_STEP_ACTIVE_STYLE,
  CHARTS_GRID_STEP_EMPTY_STYLE,
  TChartsGridStepProps,
} from "~/components/charts/grid/step";
import { TMidiValue } from "~/hooks/music/midis/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useMusicReadyContext } from "~/pages/video/music/_context/ready";
import { useTrillPicsStore } from "~/store/middleware";
import { TMusicKey } from "~/store/state/music/types";
import { isNull } from "~/utils/validation/is/null";

export const useStepPlay = <
  T extends TMusicKey
>(
  midi: TMidiValue,
  config: TChartsGridStepProps<T>
) => {
  const {
    stepsKey,
    rowIndex,
    columnIndex,
    musicKey,
  } = config;
  const { context } =
    useMusicInitContext();

  const lookup = useMusicReadyContext();
  const { synth } = useTrillPicsStore(
    ({ synth }) => ({ synth })
  );
  const { gridCellsRecord } =
    useMusicInitContext();

  const handler = () => {
    if (isNull(midi)) return;
    const updateStyle = (
      next:
        | typeof CHARTS_GRID_STEP_ACTIVE_STYLE
        | typeof CHARTS_GRID_STEP_EMPTY_STYLE
    ) => {
      (
        gridCellsRecord[musicKey][
          rowIndex
        ][columnIndex] as HTMLDivElement
      ).style.opacity = next.opacity;

      (
        gridCellsRecord[musicKey][
          rowIndex
        ][columnIndex] as HTMLDivElement
      ).style.transitionDuration =
        next.transitionDuration;
    };
    const cell =
      gridCellsRecord[musicKey][
        rowIndex
      ][columnIndex];
    if (
      gridCellsRecord !== null &&
      cell !== null
    ) {
      updateStyle(
        CHARTS_GRID_STEP_EMPTY_STYLE
      );

      (lookup[musicKey] as any)[
        stepsKey
      ].play(
        context.currentTime,
        midi,
        {
          ...synth,
          duration: 1,
          onEnded: () => {
            updateStyle(
              CHARTS_GRID_STEP_EMPTY_STYLE
            );

            (
              (lookup[musicKey] as any)[
                stepsKey
              ] as any
            ).stop();
          },
        }
      );
    }
  };
  return handler;
};
