import { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { VideoFooterExit } from "~/pages/video/_common/footer/exit";
import { VideoFooterControls } from "~/pages/video/_common/footer/controls";

type TProps = TPropsWithChildren;
export const VideoFooter: FC<
  TProps
> = () => {
  return (
    <>
      <VideoFooterControls
        // {...PRESENCE_OPACITY_ANIMATE_DELAY_02}
      />
      <VideoFooterExit />
    </>
  );
};
