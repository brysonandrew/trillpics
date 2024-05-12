import { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { VideoFooterControls } from "~/pages/video/_common/footer/controls";
import { useTrillPicsStore } from "~/store/middleware";

type TProps = TPropsWithChildren;
export const VideoFooter: FC<
  TProps
> = () => {
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({ screen })
  );
  if (!screen.isDimensions) return null;
  return (
    <div className="absolute bottom-full w-0 left-0">
      <VideoFooterControls />
    </div>
  );
};
