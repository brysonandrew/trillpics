import { ControlsGain } from "~/pages/video/music/controls/gain";

export const NodesGainMaster = () => {
  return (
    <ControlsGain
      title="master gain"
      musicKey="midis"
      ampKey="master"
    />
  );
};
