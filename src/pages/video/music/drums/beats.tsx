import type { FC } from "react";
import { useSynthwaveContext } from "@state/Context";
import { BEATS } from "~/hooks/sound/beats/constants";
import { usePresetsValueLookup } from "~/pages/video/music/preset-value";
import { MusicLayoutTitle } from "~/pages/video/music/title";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { useSoundContext } from "~/shell/global/sound";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~uno/rules/box/size";

export const RowsBeats: FC = () => {
  const s = boxSize();

  const {
    lookup: { beats: lookup },
  } = useSynthwaveContext();
  const { music, set } =
    useTrillPicsStore(
      ({ music, set }) => ({
        music,
        set,
      })
    );

  const {
    playerStyle,
    y,
    gap,
    left,
    width,
  } = useVideoPlayerStyle();
  const presetsValueLookup =
    usePresetsValueLookup();
  return (
    <ul
      className="relative row"
      style={{
        gap: s.m0125 / 6,
        // paddingTop: s.m025,
        // paddingBottom: s.m025,
        // paddingRight: s.m05,
        // left: left + s.m,
        // width: width - left - s.m,
      }}
    >
      {BEATS.map(
        (beatsKey, sequenceIndex) => {
          const steps = music[beatsKey];

          return (
            <MusicLayoutTitle
              key={beatsKey}
              onClick={() => {
                (lookup as any)[
                  beatsKey
                ](0, 10);
              }}
            >
              {beatsKey}
            </MusicLayoutTitle>
          );
        }
      )}
    </ul>
  );
};
