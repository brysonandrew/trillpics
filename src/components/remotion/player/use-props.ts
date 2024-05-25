import { LegacyRef } from "react";
import { useRemotionProps } from "~/hooks/remotion/use-props";
import { useTrillPicsStore } from "~/store/middleware";
import { PlayerRef } from "@remotion/player";
import { boxSize } from "~/constants/box/size";

export const useRemotionPlayerProps =
  () => {
    const {
      playerInstance,
      set,
      screen,
    } = useTrillPicsStore(
      ({
        playerInstance,
        set,
        screen,
      }) => ({
        playerInstance,
        screen,
        set,
      })
    );
    const {
      width: compositionWidth,
      height: compositionHeight,
      props: inputProps,
      ...props
    } = useRemotionProps();
    const s = boxSize();

    const resolveRef: LegacyRef<
      PlayerRef | null
    > = (
      instance: PlayerRef | null
    ) => {
      if (instance && !playerInstance) {
        set({
          playerInstance: instance,
        });
      }
    };
    const width =
      (screen.isDimensions
        ? screen.container.width
        : 0) - s.m3 ;
    return {
      ref: resolveRef,
      compositionWidth,
      compositionHeight,
      style: {
        // position:'relative' as const,
        cursor: "pointer",
        width:'100%',
        // margin: `0 ${s.m15}px`,
        // width,
        // height:
        //   ((screen.isDimensions
        //     ? width
        //     : 0) *
        //     9) /
        //   16,
      },
      inputProps,
      ...props,
    };
  };
