import type { FC } from "react";
import { useMusicReadyContext } from "~/pages/video/music/_context/ready/index";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";
import { MusicLayoutTitle } from "~/pages/video/music/title";
import { boxSize } from "~uno/rules/box/size";
import { IconsPlay } from "~/components/icons/playback/play";
import { IconsLoader } from "~/components/icons/loader";

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
        const isReady =
          lookup[beatsKey].isReady;
        return (
          <MusicLayoutTitle
            key={beatsKey}
            onClick={() => {
              const fn =
                lookup[beatsKey];
              if (fn) {
                fn.play(0, 1);
              }
            }}
            Icon={
              isReady
                ? IconsPlay
                : IconsLoader
            }
          >
            {beatsKey}
          </MusicLayoutTitle>
        );
      })}
    </ul>
  );
};
