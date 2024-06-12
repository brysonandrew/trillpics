import type { FC } from "react";
import { useMusicContext } from "~/pages/video/music/context/index";
import { BEATS } from "~/hooks/sound/beats/constants";
import { MusicLayoutTitle } from "~/pages/video/music/title";
import { boxSize } from "~uno/rules/box/size";

export const RowsBeats: FC = () => {
  const s = boxSize();

  const { beats: lookup } =
    useMusicContext();

  return (
    <ul
      className="relative row"
      style={{
        gap: s.m0125 / 6,
      }}
    >
      {BEATS.map((beatsKey) => {
        return (
          <MusicLayoutTitle
            key={beatsKey}
            onClick={() => {
              const fn =
                lookup[beatsKey];
              if (fn) {
                fn.play(0);
              }
            }}
          >
            {beatsKey}
          </MusicLayoutTitle>
        );
      })}
    </ul>
  );
};
