import type { FC } from "react";
import { box } from "~uno/rules/box";
import { ChartsGridStep } from "~/components/charts/grid/step";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { TNodesRecord } from "~/hooks/music/midis/types";
import {
  TBeatsKey,
  TBeatsRecord,
} from "~/hooks/music/beats/types";
import { UStepsKey } from "~/store/state/music/types";
import { TDivProps } from "@brysonandrew/config-types";

type TBeatsProps = {
  musicKey: "beats";
  includes: readonly TBeatsKey[];
  presets: TBeatsRecord;
};
type TMidisProps = {
  musicKey: "midis";
  presets: TNodesRecord;
};

type TChildrenProps = {
  stepsKey: UStepsKey;
  stepsCount: number;
  rowIndex: number;
};
type TProps = (
  | TBeatsProps
  | TMidisProps
) &
  Omit<TDivProps, "children"> & {
    Background: FC;
    children(
      props: TChildrenProps
    ): JSX.Element | null;
  };
export const ChartsGrid: FC<TProps> = ({
  Background,
  musicKey,
  style,
  children,
  presets,
  ...props
}) => {
  
  const keys =
    "includes" in props
      ? props.includes
      : (["synth"] as const);

  return (
    <div
      className="relative column-space items-stretch justify-stretch"
      style={{
        height: box.m2,
        ...style,
      }}
      {...props}
    >
      {keys.map(
        (
          stepsKey: UStepsKey,
          rowIndex,
          { length: stepCount }
        ) => {
          const steps =
            "synth" in presets
              ? presets.synth
              : presets[
                  stepsKey as TBeatsKey
                ];
          return (
            <div
              key={stepsKey}
              className="relative flex flex-row grow items-between justify-stretch text-white text-xxxs uppercase h-full"
            >
              <div className="absolute right-full">
                {children({
                  stepsCount:
                    steps.length,
                  stepsKey,
                  rowIndex,
                })}
              </div>

              <Background />
              {steps.map(
                (
                  value,
                  columnIndex
                ) => {
                  const key =
                    resolveCompositeKey(
                      stepsKey,
                      columnIndex,
                      rowIndex
                    );
                  return (
                    <ChartsGridStep
                      key={key}
                      title={`► Play ${stepsKey} step`}
                      stepsKey={
                        stepsKey as
                          | "synth"
                          | TBeatsKey
                      }
                      value={value}
                      columnIndex={
                        columnIndex
                      }
                      rowIndex={
                        rowIndex
                      }
                      stepCount={
                        stepCount
                      }
                      musicKey={
                        musicKey
                      }
                    />
                  );
                }
              )}
            </div>
          );
        }
      )}
    </div>
  );
};
