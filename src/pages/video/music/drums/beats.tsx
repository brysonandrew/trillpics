import type { FC } from "react";
import { useMusicReadyContext } from "~/pages/video/music/_context/ready/index";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";
import { MusicLayoutTitle } from "~/pages/video/music/title";
import { boxSize } from "~uno/rules/box/size";
import { useTrillPicsStore } from "~/store/middleware";

export const RowsBeats: FC = () => {
  const s = boxSize();

  const { beats: lookup } =
    useMusicReadyContext();


  return (
    <ul
      className="relative row"
      style={{
        gap: s.m025,
      }}
    >
      {BEATS_KEYS.map((beatsKey) => {
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
