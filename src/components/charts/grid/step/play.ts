import { resolveVarCss } from "@brysonandrew/color-base";
import { CHARTS_GRID_STEP_ACTIVE_STYLE, CHARTS_GRID_STEP_EMPTY_STYLE, TChartsGridStepProps } from "~/components/charts/grid/step";
import {  TBaseMidiValue,  TMidiValue,} from "~/hooks/music/midis/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useMusicReadyContext } from "~/pages/video/music/_context/ready";
import { useTrillPicsStore } from "~/store/middleware";
import { TMusicKey } from "~/store/state/music/types";
import { isNull } from "~/utils/validation/is/null";

type TConfig = TChartsGridStepProps;
export const useStepPlay = (
  midi: TMidiValue,
  config: TConfig
) => {
  const {
    stepsKey,
    rowIndex,
    columnIndex,
  } = config;
  const isSynth = stepsKey === "synth";
  const { context } =
    useMusicInitContext();

  const lookup = useMusicReadyContext();
  const { synth } = useTrillPicsStore(
    ({ synth }) => ({ synth })
  );
  const { gridCellsRecord } =
    useMusicInitContext();
  const progressKey = (
    isSynth ? "midis" : "beats"
  ) as TMusicKey;

  const handler = () => {
    if (isNull(midi)) return;
    const cell =
      gridCellsRecord[progressKey][
        rowIndex
      ][columnIndex];
    if (
      gridCellsRecord !== null &&
      cell !== null
    ) {
  
      (
        gridCellsRecord[progressKey][
          rowIndex
        ][columnIndex] as HTMLDivElement
      ).style.opacity =CHARTS_GRID_STEP_ACTIVE_STYLE.opacity;
  
      (
        gridCellsRecord[progressKey][
          rowIndex
        ][columnIndex] as HTMLDivElement
      ).style.transitionDuration =CHARTS_GRID_STEP_ACTIVE_STYLE.transitionDuration;

      (
        (lookup[progressKey] as any)[
          stepsKey
        ] as any
      ).play(
        context.currentTime,
        midi,
        {
          ...synth,
          duration: 1,
          onEnded: () => {
            (
              gridCellsRecord[progressKey][
                rowIndex
              ][columnIndex] as HTMLDivElement
            ).style.opacity =CHARTS_GRID_STEP_EMPTY_STYLE.opacity;
        
            (
              gridCellsRecord[progressKey][
                rowIndex
              ][columnIndex] as HTMLDivElement
            ).style.transitionDuration =CHARTS_GRID_STEP_EMPTY_STYLE.transitionDuration;
      

            (
              (
                lookup[
                  progressKey
                ] as any
              )[stepsKey] as any
            ).stop();
          },
        }
      );
    }
  };
  return handler;
};
