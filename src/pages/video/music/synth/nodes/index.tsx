import { FC } from "react";
import { useVideoStyle } from "~/pages/video/style";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { MusicSynthNodesSource } from "~/pages/video/music/synth/nodes/source";

export const MusicSynthNodes: FC =
  () => {
    const { width } = useVideoStyle();
    const { audio } = useMusicRefs();
    return (
      <div
        className="relative w-full"
        style={{
          width,
        }}
        ref={audio.graph.ref}
      >
        <>
          {audio.graph.sources.map(
            (
              source: TGraphSource,
              row: number
            ) => {
              return (
                <MusicSynthNodesSource
                  key={`${source.key}-${row}`}
                  source={source}
                />
              );
            }
          )}
        </>
      </div>
    );
  };
