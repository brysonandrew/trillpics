import { FC } from "react";
import { ChartsGrid } from "~/components/charts/grid";
import { ChartsGridStaff } from "~/components/charts/grid/staff";
import { useVideoStyle } from "~/pages/video/style";
import { useTrillPicsStore } from "~/store/middleware";
import { box } from "~uno/rules/box";
import clsx from "clsx";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { VideoMusicSynthHeader } from "~/pages/video/music/synth/header";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";
import { ChartsGridPlayButton } from "~/components/charts/grid/step/play/button";

export const VideoMusicSynth: FC =
  () => {
    const s = box;
    const {
      sidebarWidthOffset,
      width,
    } = useVideoStyle();
    const { steps, synth } =
      useTrillPicsStore(
        ({ steps, synth }) => ({
          steps,
          synth,
        })
      );
    return (
      <>
        <div
          className="relative column-start"
          style={{
            width: width + box.m025,
          }}
        >
          <BackgroundGlass
            boxStyle={{
              left: sidebarWidthOffset,
            }}
            style={{
              borderTopRightRadius:
                box.radius.xl,
            }}
          />

          <VideoMusicSynthHeader />
        </div>
        <ChartsGrid
          musicKey="midis"
          Background={ChartsGridStaff}
          presets={{
            synth: steps,
          }}
          style={{
            left:
              sidebarWidthOffset +
              box.m003125,
            width:
              width -
              sidebarWidthOffset +
              box.m025 -
              box.m00625,
          }}
        >
          {(props) => (
            <div
              className="absolute fill"
              style={{
                left:
                  -sidebarWidthOffset /
                  2,
                height: box.m2,
                width: box.m05,
              }}
            >
              <ChartsGridStaff
                style={{ opacity: 0.2 }}
              >
                {(index) => (
                  <div
                    className={clsx(
                      "absolute row right-full top-1/2 text-xxxs text-white -translate-y-1/2",
                      index % 2 === 0
                        ? "-translate-x-5"
                        : "-translate-x-0.5"
                    )}
                  >
                    <ChartsGridPlayButton
                    
                    >
                      <TypographyXxxs>
                        {(synth.midi ??
                          0) + index}
                      </TypographyXxxs>
                    </ChartsGridPlayButton>
                  </div>
                )}
              </ChartsGridStaff>
            </div>
          )}
        </ChartsGrid>
      </>
    );
  };
