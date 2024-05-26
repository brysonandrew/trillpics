import { Video_RootCursor } from "~/pages/video/_root/cursor";
import { Helmet } from "react-helmet-async";
import { GridOptions } from "~/pics/hud/left/grid-options";

export const Video = () => {
  return (
    <>
      <Helmet>
        <title>
          Trill Pics | Video Sequencer
        </title>
      </Helmet>
      <GridOptions />
      <Video_RootCursor />
    </>
  );
};
