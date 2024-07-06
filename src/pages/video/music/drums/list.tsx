import type { FC } from "react";
import { useMusicPlay } from "~/pages/video/music/_context/ready/index";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";
import { MusicLayoutTitle } from "~/pages/video/music/layout/title";
import { box } from "~uno/rules/box";
import { IconsPlay } from "~/components/icons/playback/play";
import { IconsLoader } from "~/components/icons/loader";

export const BeatsList: FC = () => {
  

  const { beats: lookup } =
    useMusicPlay();

  return (
    <ul
      className="relative row"
      style={{
        gap: box.m025,
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
