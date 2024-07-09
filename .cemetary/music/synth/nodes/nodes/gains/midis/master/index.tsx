import { FC } from "react";
import { NodesSourceGains } from "~/pages/video/music/synth/nodes/nodes/gains";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";

type TProps = TSourceNodesProps;
export const NodesSourceGainsMidisMaster: FC<
  TProps
> = (props) => {
  return (
    <NodesSourceGains
      {...{
        musicKey: "midis",
        ampKey: "master",
        ...props,
      }}
    />
  );
};
