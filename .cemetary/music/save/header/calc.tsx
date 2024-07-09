import type { FC } from "react";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { useContextMusicRecorder } from "~/pages/video/music/_context/recorder";
import { useTrillPicsStore } from "~/store/middleware";

export const SecondsCalculation: FC =
  () => {
    const { bpm } = useTrillPicsStore(
      ({ bpm }) => ({ bpm })
    );
    const {
      loopCount,
      loopsRemainder,
    } = useContextMusicRecorder();

    return (
      <div className="absolute top-full row-space w-full grow mt-3.75 column-start gap-0.5 text-xxs">
        <div className="whitespace-nowrap">
          {`${bpm}/60 bps, 4 beats per bar.`}
        </div>
        <LinesHorizontalLight />
        <div className="row">
          <div className="whitespace-nowrap">
            {`x${loopCount} loop`}
          </div>
          {loopsRemainder > 0 && (
            <div className="whitespace-nowrap">
              {`+${loopsRemainder} second${
                loopsRemainder === 1
                  ? ""
                  : "s"
              }`}
            </div>
          )}
        </div>
      </div>
    );
  };
