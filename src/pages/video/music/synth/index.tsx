import { FC } from "react";
import { VideoMusicSynthHeader } from "~/pages/video/music/synth/header";
import { VideoMusicSynthMulti } from "~/pages/video/music/synth/multi";
import { VideoMusicSynthSingle } from "~/pages/video/music/synth/single";

export const VideoMusicSynth: FC =
  () => {
    return (
      <>
        <VideoMusicSynthHeader />
        <VideoMusicSynthSingle />
        <VideoMusicSynthMulti />
      </>
    );
  };
