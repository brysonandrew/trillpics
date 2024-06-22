import type { FC } from "react";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { MusicLayoutDrums } from "~/pages/video/music/beats/header";
import { ChartsGrid } from "~/components/charts/grid";
import { useVideoStyle } from "~/pages/video/style";
import { useTrillPicsStore } from "~/store/middleware";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";
import { ChartsGridLinesHorizontal } from "~/components/charts/grid/lines/horizontal";
import { useMusicReadyContext } from "~/pages/video/music/_context/ready";
import { IconsLoader } from "~/components/icons/loader";
import { IconsPlay } from "~/components/icons/playback/play";
import { isBeatsKey } from "~/utils/validation/is/beats/key";
import { box } from "~uno/rules/box";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";

export const VideoMusicDrums: FC =
  () => {
    const {
      sidebarWidthOffset,
      width,
    } = useVideoStyle();
    const { beats: lookup } =
      useMusicReadyContext();
    const s = box;
    const { beatsPresetKey } =
      useTrillPicsStore(
        ({ beatsPresetKey }) => ({
          beatsPresetKey,
        })
      );
    return (
      <>
        <div
          className="relative row-space"
          style={{
            width: width + s.m025,
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
            BEATS_PRESETS[
              beatsPresetKey
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
                className="relative row-space gap-1 bg-main brightness-80 _gradient-mesh"
                onClick={() => {
                  const fn =
                    lookup[stepsKey];
                  if (fn) {
                    fn.play(0, 1);
                  }
                }}
                style={{
                  top: s.m03125,
                  width:
                    s.m2 -
                    s.m025-s.m0625,
                    right:s.m03125,
                  padding: s.m0625,
                  paddingRight: s.m025,
                  paddingLeft: s.m0125,
                  transform: `translateX(${-s.m025}px)`,
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
