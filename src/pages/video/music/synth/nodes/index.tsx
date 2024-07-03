import { FC } from "react";
import { box } from "~uno/rules/box";
import { useVideoStyle } from "~/pages/video/style";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { MusicSynthNodesSources } from "~/pages/video/music/synth/nodes/sources";
import { resolveSquare } from "@brysonandrew/measure";

export const MusicSynthNodes: FC =
  () => {
    const {
      width,
      sidebarWidthOffset,
    } = useVideoStyle();
    const { audio } = useMusicRefs();
    return (
      <div
        className="relative w-full"
        style={{
          ...box.p(box.m0125),
          // paddingLeft:
          //   sidebarWidthOffset,
          width,
        }}
        ref={audio.graph.ref}
      >
      
          <MusicSynthNodesSources />
     
      </div>
    );
  };
