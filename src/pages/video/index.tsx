import { Video_RootCursor } from "~/pages/video/_root/cursor";
import { Helmet } from "react-helmet-async";

export const Video = () => {
  return (
    <>
      <Helmet>
        <title>Trill Pics | Video Maker</title>
      </Helmet>
      <Video_RootCursor />
    </>
  );
};
