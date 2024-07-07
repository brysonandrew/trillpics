import { ControlsGain } from "~/pages/video/music/controls/gain";
import { box } from "~uno/rules/box";

export const DrumsMasterGain = () => {
  return (
    <ControlsGain
      musicKey="beats"
      title="drums master"
      ampKey="master"
      style={{
        paddingTop:box._025,
        paddingBottom:box._05
      }}
    />
  );
};
