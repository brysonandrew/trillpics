import { type FC } from "react";
import { TypographySm } from "~/components/layout/typography/sm";
import { ProgressTimerDisplay } from "~/pages/video/music/audio/uploaded/item/progress/timer/display";

type TProps = { elapsed: number };
export const AudioUploadedItemTimer: FC<
  TProps
> = ({ elapsed }) => {
  return (
    <TypographySm>
      <div className="flex flex-row gap-1 text-white">
        <ProgressTimerDisplay
          seconds={elapsed}
        />
      </div>
    </TypographySm>
  );
};
