import type { FC } from "react";
import { steps } from "framer-motion";
import { ChartsGridLabelsName } from "~/components/charts/grid/labels/name";
import { ChartsGridLabelsSteps } from "~/components/charts/grid/labels/steps";
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
