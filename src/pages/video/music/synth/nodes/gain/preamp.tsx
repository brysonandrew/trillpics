import { ControlsGain } from "~/pages/video/music/controls/gain";

export const NodesGainPreamp = () => {
  return (
    <ControlsGain
      title="preamp gain"
      musicKey="midis"
      ampKey="preamp"
    />
  );
};
