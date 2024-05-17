import { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { PlaybackProgressSeeker } from "~/components/remotion/player/playback/progress/seeker";
import { useContextGrid } from "~/context";

type TProps = TPropsWithChildren;
export const PlayerFooter: FC<
  TProps
> = () => {
  const { footerValue } =
  useContextGrid();
  return (
    <div className="absolute bottom-20 left-0 w-full h-5">
      <PlaybackProgressSeeker />
    </div>
  );
};
