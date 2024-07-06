import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { isDefined } from "~/utils/validation/is/defined";

export const useNodesSourceNoiseToggle =
  () => {
    const handler = (
      source: TGraphSource
    ) => {
      if (!source.refs["white-noise"])
        return;

      if (
        source.refs["white-noise"]?.apm
          .isStarted
      ) {
        source.refs[
          "white-noise"
        ].apm.end();
        console.log("END");
      } else {
        source.refs[
          "white-noise"
        ].apm.start();
      }

      // source.refs[
      //   key
      // ].apm.output.connect(
      //   audio.gains.midis.master
      // );
      // audio.gains.midis.master.gain.value = 0.05;
      // audio.gains.midis.master.connect(
      //   audio.gains.master
      // );
      // audio.gains.master.connect(
      //   audio.context.destination
      // );
    };

    return handler;
  };
