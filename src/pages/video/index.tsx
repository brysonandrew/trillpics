import { useContextGrid } from "~/context";
import { VideoFooter } from "~/pages/video/_common/footer";
import { Video_RootCursor } from "~/pages/video/_root/cursor";

export const Video = () => {
  const { footerValue } =
    useContextGrid();

  return (
    <>
      {footerValue && <VideoFooter />}
      <Video_RootCursor />

    </>
  );
};
