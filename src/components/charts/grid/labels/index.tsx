import type { FC } from "react";
import { ChartsGridLabelsName } from "~/components/charts/grid/labels/name";
import { UStepsKey } from "~/store/state/music/types";

type TProps = {
  stepsKey: UStepsKey;
  stepsCount: number;
  rowIndex: number;
};
export const ChartsGridLabels: FC<
  TProps
> = (props) => {
  const { stepsKey } = props;
  return (
    <ChartsGridLabelsName
      stepsKey={stepsKey}
    />
  );
};
