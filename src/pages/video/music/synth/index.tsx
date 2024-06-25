import { FC } from "react";
import { ChartsGrid } from "~/components/charts/grid";
import { ChartsGridStaff } from "~/components/charts/grid/staff";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";
import clsx from "clsx";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { VideoMusicSynthHeader } from "~/pages/video/music/synth/header";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";
import { ChartsGridPlayButton } from "~/components/charts/grid/step/play/button";
import { encryptMidiHoverKey } from "~/components/charts/grid/to-midi-hover-key";
import { midiValueToNumber } from "~/utils/music/midi";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const VideoMusicSynth: FC =
  () => {
    const {
      sidebarWidthOffset,
      width,
    } = useVideoStyle();
    const { schedule } =
      useMusicRefs();
    // const { schedule, synth } =
    //   useTrillPicsStore(
    //     ({ schedule, synth }) => ({
    //       steps,
    //       synth,
    //     })
    //   );
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
            synth: schedule.record.steps,
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
          {({ rowIndex }) => (
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
                {(index) => {
                  const midi =
                    (schedule.record.synth
                      .midi ?? 0) +
                    index;
                  const n =
                    midiValueToNumber(
                      midi
                    );
                  const hoverKey =
                    encryptMidiHoverKey(
                      n,
                      -1,
                      index
                    );

                  return (
                    <div
                      className={clsx(
                        "absolute row right-full top-1/2 text-xxxs text-white -translate-y-1/2",
                        index % 2 === 0
                          ? "-translate-x-5"
                          : "-translate-x-0.5"
                      )}
                    >
                      <TypographyXxxs>
                        {midi}
                      </TypographyXxxs>
                      {hoverKey !==
                        null && (
                        <ChartsGridPlayButton
                          title={`play ${midi}`}
                          midi={midi}
                          musicKey="midis"
                          stepsKey="synth"
                          hoverKey={
                            hoverKey
                          }
                          rowIndex={
                            rowIndex
                          }
                          columnIndex={
                            -1
                          }
                        />
                      )}
                    </div>
                  );
                }}
              </ChartsGridStaff>
            </div>
          )}
        </ChartsGrid>
      </>
    );
  };
