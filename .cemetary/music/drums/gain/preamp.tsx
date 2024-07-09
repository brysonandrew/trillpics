import { ControlsGain } from "~/pages/video/music/controls/gain";
import { box } from "~uno/rules/box";

export const DrumsPreampGain = () => {
  return (
    <ControlsGain
      musicKey="beats"
      title="drums preamp"
      ampKey="preamp"
      style={{
        paddingTop:box._025,
        paddingBottom:box._05
      }}
    />
  );
};
