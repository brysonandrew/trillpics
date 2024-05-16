import { createPortal } from "react-dom";
import { useContextGrid } from "~/context";
import { Video_RootCursor } from "~/pages/video/_root/cursor";
import { VideoFooterLeft } from "~/pages/video/_root/left";

export const Video = () => {
  const { footerValue } =
    useContextGrid();
  return (
    <>
      <Video_RootCursor />
      {footerValue &&
        createPortal(
          <VideoFooterLeft />,
          footerValue
        )}
    </>
  );
};
