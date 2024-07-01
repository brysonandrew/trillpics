import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { TUseIdsResult } from "~/pages/video/music/synth/nodes/modulators/ids";
import { ModulatorsNumbers } from "~/pages/video/music/synth/nodes/modulators/inputs/numbers";
import { box } from "~uno/rules/box";

type TProps = TDivProps & {
  id: string;
  ids: TUseIdsResult;
};
export const ModulatorsInputs: FC<
  TProps
> = ({style, ...props}) => {
  return (
    <div
      id={props.ids.started.inputs}
      className="relative w-full column-stretch"
      style={{
        gap: box.m0125,
    
          ...style
      }}
    >
      <ModulatorsNumbers {...props} />
    </div>
  );
};
