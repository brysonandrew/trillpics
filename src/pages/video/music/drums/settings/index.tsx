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
        "relative row-start"
      )}
      style={{
        gap: box.m025,
        ...box.px(box.m05),
        ...box.py(box.m025),
      }}
    >
      <BackgroundGlass
        boxStyle={{
          left: 0,
          backdropFilter: "blur(4px)",

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
