import { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { PlaybackProgressSeeker } from "~/components/remotion/player/playback/progress/seeker";

type TProps = TPropsWithChildren;
export const PlayerFooter: FC<
  TProps
> = () => {
  return (
    <div className="relative bottom-0 left-0 w-full h-5">
      <PlaybackProgressSeeker />
    </div>
  );
};
