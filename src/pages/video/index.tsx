import { Helmet } from "react-helmet-async";
import { GridOptions } from "~/pics/hud/left/grid-options";
import { Video_Root } from "~/pages/video/_root";

export const Video = () => {
  return (
    <>
      <Helmet>
        <title>
          Trill Pics | Video Sequencer
        </title>
      </Helmet>
      <GridOptions />
      <Video_Root />
    </>
  );
};
