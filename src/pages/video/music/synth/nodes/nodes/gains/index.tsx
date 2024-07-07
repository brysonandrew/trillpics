import { FC } from "react";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";
import { renderUi } from "~/pages/video/music/synth/nodes/render/ui";
import { IconsGain } from "~/components/icons/gain";
import { TDualAmp } from "~/pages/video/music/_context/refs/audio/gains/types";
import { useNodesSourceGainsCreate } from "~/pages/video/music/synth/nodes/nodes/gains/create";
import { TMusicKey } from "~/store/state/music/types";

export type TNodesSourceGainsProps =
  TSourceNodesProps & {
    ampKey: keyof TDualAmp;
    musicKey: TMusicKey;
  };
export const NodesSourceGains: FC<
  TNodesSourceGainsProps
> = (props) => {
  const { ampKey, ...rest } = props;
  const result =
    useNodesSourceGainsCreate(props);
  return (
    <>
      {renderUi(
        "nodes",
        ampKey,
        IconsGain,
        result.ui
      )}
    </>
  );
};
