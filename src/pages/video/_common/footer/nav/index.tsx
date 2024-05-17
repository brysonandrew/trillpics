import { FC } from "react";
import { motion } from "framer-motion";
import { useHoverKey } from "~/hooks/use-hover-key";
import { VIDEO_ROUTE } from "~/constants/params";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { ControlsShow } from "~/pages/video/_common/footer/nav/show";
import { ControlsPlayer } from "~/pages/video/_common/footer/nav/player";
import { FooterNavVideo } from "~/pages/video/_common/footer/nav/video";
import { VideoFooterExit } from "~/pages/video/_common/footer/nav/exit";
import { boxSize } from "~/constants/box/size";
import { useReady } from "~/hooks/use-ready";
import { LinesHorizontal } from "~/pages/video/_common/footer/nav/lines/horizontal";
import { boxRadius } from "~/constants/box/radius";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import clsx from "clsx";
import { TypographyBorderedSm } from "~/components/typography/bordered/sm";
import { PlaybackTimer } from "~/components/remotion/player/playback/timer";
import { PlaybackProgressSeeker } from "~/components/remotion/player/playback/progress/seeker";
import { useTrillPicsStore } from "~/store/middleware";
import { PlaybackButtonsBackward } from "~/components/remotion/player/playback/buttons/backward";
import { PlaybackButtonsForward } from "~/components/remotion/player/playback/buttons/forward";

export const VideoFooterNav: FC =
  () => {
    const { isPlaying } =
      useTrillPicsStore(
        ({ isPlaying }) => ({
          isPlaying,
        })
      );
    const isReady = useReady();

    return (
      <div className="absolute bottom-0 row justify-between gap-4 h-0 w-full text-main z-50">
        <VideoFooterExit />
        <LinesHorizontal classValue="opacity-50" />
        <TypographyBorderedSm>
          create
        </TypographyBorderedSm>
        <LinesHorizontal classValue="opacity-50" />
        <motion.div
          className={clsx(
            "relative row justify-between gap-4 p-4 w-3/4 shrink-0 border-current border-2",
            "backdrop-blur-sm"
          )}
          style={{
            borderRadius:
              boxRadius("xl"),
          }}
          {...PRESENCE_OPACITY}
        >
          {isPlaying ? (
            <>
              <PlaybackButtonsBackward />
              <PlaybackProgressSeeker />
              <PlaybackButtonsForward />
            </>
          ) : (
            <>
              <FooterNavVideo />
              <LinesHorizontal />
              <TypographyBorderedSm>
                edit
              </TypographyBorderedSm>
              <LinesHorizontal />
              <ControlsShow
                key="ControlsShow"
                {...(true
                  ? {
                      layoutId:
                        "ControlsShow",
                    }
                  : {})}
              />
              <LinesHorizontal />
              <TypographyBorderedSm>
                play
              </TypographyBorderedSm>
              <LinesHorizontal />
            </>
          )}
          <div className="row gap-2 absolute bottom-full right-0 -translate-y-1/4 bg-white-0 dark:bg-black-0 backdrop-blur-sm rounded-xl border-current border py-1 px-4 text-current pointer-events-nont">
            <PlaybackTimer />
          </div> 
          <ControlsPlayer
            key="ControlsPlayer"
            {...(isReady
              ? {
                  layoutId:
                    "ControlsPlayer",
                }
              : {})}
          />
        </motion.div>
      </div>
    );
  };
