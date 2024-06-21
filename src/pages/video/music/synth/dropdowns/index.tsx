import type { FC } from "react";
import { SynthScaleKey } from "~/pages/video/music/synth/scale/key";
import { SynthScalePattern } from "~/pages/video/music/synth/scale/pattern";
import { SynthType } from "~/pages/video/music/synth/type";
import { useVideoStyle } from "~/pages/video/style";
import { boxSize } from "~uno/rules/box/size";

export const SynthDropdowns: FC = () => {
  const s = boxSize();
  const {
    sidebarWidthOffset,
    left,
  } = useVideoStyle();
  return (
    <div
      className="row relative"
      style={{
        left,
        gap: s.m025,
      }}
    >
      <SynthType />
      <SynthScaleKey />
      <SynthScalePattern />
    </div>
  );
};
