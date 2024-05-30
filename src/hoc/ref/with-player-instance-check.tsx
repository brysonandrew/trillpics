import { FC } from "react";
import { PollPlayerInstance } from "~/components/poll-player-instance";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";
import { isPlayerInstance } from "~/utils/validation/is/player";

export function withPlayerInstanceCheck<
  T extends object
>(I: FC<T>) {
  const C = (props: T) => {
    const { playerInstance } =
      useContextPlayer_Init();

    if (
      isPlayerInstance(playerInstance)
    )
      return <I {...props} />;
    return <PollPlayerInstance />;
  };
  return C;
}
