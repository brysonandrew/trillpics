import type { FC } from "react";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { MusicLayoutDrums } from "~/pages/video/music/drums/header";
import { ChartsGrid } from "~/components/charts/grid";
import { useVideoStyle } from "~/pages/video/style";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";
import { ChartsGridLinesHorizontal } from "~/components/charts/grid/lines/horizontal";
import { useMusicPlay } from "~/pages/video/music/_context/ready";
import { IconsLoader } from "~/components/icons/loader";
import { IconsPlay } from "~/components/icons/playback/play";
import { isBeatsKey } from "~/utils/validation/is/beats/key";
import { box } from "~uno/rules/box";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";
import { useMusicRefs } from "~/pages/video/music/_context/refs";

export const VideoMusicDrums: FC =
  () => {
    const {
      sidebarWidthOffset,
      width,
    } = useVideoStyle();
    const { schedule, audio } =
      useMusicRefs();
    const { beats: lookup } =
      useMusicPlay();

    return (
      <>
        <div
          className="relative row-space"
          style={{
            width: width + box._025,
          }}
        >
          <BackgroundGlass
            boxStyle={{
              left: sidebarWidthOffset,
            }}
          />
          <MusicLayoutDrums />
        </div>
        <ChartsGrid
          musicKey="beats"
          Background={
            ChartsGridLinesHorizontal
          }
          presets={
            schedule.record.presets[
              schedule.record.presetKey
            ]
          }
          includes={BEATS_KEYS}
          style={{
            left: sidebarWidthOffset,
            width:
              width -
              sidebarWidthOffset,
          }}
        >
          {({ stepsKey }) => {
            if (isBeatsKey(stepsKey)) {
              return null;
            }
            const isReady =
              lookup[stepsKey].isReady;
            const Icon = isReady
              ? IconsPlay
              : IconsLoader;

            return (
              <button
                key={stepsKey}
                className="relative row-space gap-1 bg-main brightness-80 _bi-mesh"
                onClick={() => {
                  const fn =
                    lookup[stepsKey];
                  if (fn) {
                    fn.play(0, 1);
                  }
                }}
                style={{
                  top: box._003125,
                  width:
                    box._2 -
                    box._025 -
                    box._00625,
                  right: box._003125,
                  padding: box._00625,
                  paddingRight:
                    box._025,
                  paddingLeft:
                    box._0125,
                  transform: `translateX(${-box._025}px)`,
                }}
              >
                <Icon size={12} />
                <TypographyXxxs>
                  {stepsKey}
                </TypographyXxxs>
              </button>
            );
          }}
        </ChartsGrid>
      </>
    );
  };
