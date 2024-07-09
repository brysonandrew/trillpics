import { FC } from "react";
import { useVideoStyle } from "~/pages/video/style";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TGraphSourceWithId } from "~/pages/video/music/_context/refs/audio/graph/types";
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
      >
        <>
          {audio.graph.sources.map(
            (
              source: TGraphSourceWithId,
              sourceIndex: number
            ) => {
              return (
                <MusicSynthNodesSource
                  key={`${source.key}-${sourceIndex}`}
                  source={source}
                  sourceIndex={
                    sourceIndex
                  }
                />
              );
            }
          )}
        </>
      </div>
    );
  };
