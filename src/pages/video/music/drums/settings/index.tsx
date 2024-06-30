import type { FC } from "react";
import { cx } from "class-variance-authority";
import { box } from "~uno/rules/box";
import { DrumsPlaybackRate } from "~/pages/video/music/drums/playback-rate";
import { DrumsMasterGain } from "~/pages/video/music/drums/gain/master";
import { DrumsPreampGain } from "~/pages/video/music/drums/gain/preamp";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { COLOR_SHADE_RECORD } from "~uno/color";

export const DrumsSettings: FC = () => {
  return (
    <div
      className={cx(
        "relative"
        // "items-stretch",
        // "justify-stretch"
        // "xxxs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 sm:grid-cols-4 xxl:grid-cols-5 xxxl:grid-cols-6"
      )}
      style={{
        display: "grid",
        gap: box.m0125,
        gridTemplateColumns: `repeat(3, 1fr)`,
        ...box.p(box.m025),
      }}
    >
      <BackgroundGlass
            boxStyle={{
              left: 0,
              backdropFilter:'blur(4px)',

              backgroundColor:
                COLOR_SHADE_RECORD[
                  "dark-08"
                ],
            }}
          />
      <DrumsPreampGain />
      <DrumsMasterGain />
      <DrumsPlaybackRate />
    </div>
  );
};
