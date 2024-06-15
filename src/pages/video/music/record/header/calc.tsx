import type { FC } from "react";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~uno/rules/box/size";

export const Calc: FC = () => {
  const s = boxSize();
  const { bpm } = useTrillPicsStore(
    ({ bpm }) => ({ bpm })
  );
  const { loopCount, loopsRemainder } =
    useMusicRecorderContext();

  return (
      <div className="absolute top-full row-space w-full grow mt-2.75 column-start gap-0.5 text-xxs">
        <div className="whitespace-nowrap">
          {`${bpm}/60 bps, 4 beats per bar.`}
        </div>
        <LinesHorizontal />
        <div className="row">
          <div className="whitespace-nowrap">
            {`x${loopCount} loop`}
          </div>
          <div className="whitespace-nowrap">
            {`+${loopsRemainder} second${
              loopsRemainder === 1
                ? ""
                : "s"
            }`}
        </div>

        {/* <div>
              {`${
                (1 / (bpm / 60)) * 4
              } seconds`}
            </div> */}
      </div>
    </div>
  );
};
