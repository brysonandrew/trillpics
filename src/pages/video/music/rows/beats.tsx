import type { FC } from "react";
import { BEATS } from "~/hooks/sound/beats/constants";
import { MusicRowsSteps } from "~/pages/video/music/rows/steps";
import { useTrillPicsStore } from "~/store/middleware";

export const RowsBeats: FC = () => {
  const { music, set } =
    useTrillPicsStore(
      ({ music, set }) => ({
        music,
        set,
      })
    );
  return (
    <div>
      <ul className="relative column-stretch gap-2">
        {BEATS.map(
          (beatsKey, sequenceIndex) => {
            const steps =
              music[beatsKey];

            return (
              <MusicRowsSteps
                key={beatsKey}
                name={beatsKey}
                index={sequenceIndex}
                // beats={steps}
                rightContent={
                  null
                  // <MusicRowsHeaderPresetsBeats
                  //   name={beatsKey}
                  //   value={
                  //     presetsValueLookup[
                  //       beatsKey
                  //     ]
                  //   }
                  // />
                }
              />
            );
          }
        )}
      </ul>
    </div>
  );
};
