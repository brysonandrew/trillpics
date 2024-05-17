import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { RemotionPlayer } from "~/components/remotion/player";
import { PortalBody } from "@brysonandrew/layout-portal";

export const VideoPlayer = () => {
  return (
    <PortalBody>
      <div className="h-0 center">
        <PicBackdrop />
        <RemotionPlayer />
      </div>
    </PortalBody>
  );
};
