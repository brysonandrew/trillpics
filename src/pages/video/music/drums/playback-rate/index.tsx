import { DrumsPlaybackRateNumbers } from "~/pages/video/music/drums/playback-rate/numbers";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import { box } from "~uno/rules/box";

export const DrumsPlaybackRate = () => {
  return (
    <DrumsPlaybackRateNumbers musicKey="beats">
      {(Input, children) => (
        <NodesTemplate
          title="playback rate"
          Input={Input}
          style={{ gap: box._003125 }}
        >
          {children}
        </NodesTemplate>
      )}
    </DrumsPlaybackRateNumbers>
  );
};
