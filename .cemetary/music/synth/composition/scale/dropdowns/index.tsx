import type { FC } from "react";
import { MusicScaleKey } from "~/pages/video/music/synth/composition/scale/dropdowns/key";
import { MusicScalePattern } from "~/pages/video/music/synth/composition/scale/dropdowns/pattern";

export const MusicScaleDropdowns: FC =
  () => {
    return (
      <>
      <MusicScaleKey/>
      <MusicScalePattern/>
       
      </>
    );
  };
