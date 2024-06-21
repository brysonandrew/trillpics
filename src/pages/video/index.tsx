import { Helmet } from "react-helmet-async";
import { GridOptions } from "~/pics/hud/left/grid-options";
import { Video_Root } from "~/pages/video/_root";
import { PAGE_TITLES } from "~/pics/hud/nav/constants";

export const Video = () => {
  return (
    <>
      <Helmet>
        <title>
          Trill Pics |{" "}
          {PAGE_TITLES["Video Pics"]}
        </title>
      </Helmet>
      <GridOptions />
      <Video_Root />
    </>
  );
};
