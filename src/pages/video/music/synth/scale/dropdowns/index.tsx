import type { FC } from "react";
import { MusicScaleKey } from "~/pages/video/music/synth/scale/dropdowns/key";
import { MusicScalePattern } from "~/pages/video/music/synth/scale/dropdowns/pattern";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

export const MusicScaleDropdowns: FC = () => {
  
  const {
    sidebarWidthOffset,
    width,
  } = useVideoStyle();
  return (
    <div
      className="row relative"
      style={{
        left:sidebarWidthOffset,
        gap: box.m025,
      }}
    >
     
    </div>
  );
};
