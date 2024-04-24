import type { FC } from "react";
import { resolvePresence } from "@brysonandrew/motion-core";
import {
  PicDisplay,
  TPicDisplayProps,
} from "~/shell/pics/pic/display";
import { FULLSCREEN_Z } from "~/constants/dom";
import { TUseBox } from "~/shell/pics/pic/box";
import { useVideoStore } from "~/store";

export const PicDisplayCell: FC<
  TPicDisplayProps & TUseBox
> = (props) => {
  const {
    frontCheckState: [isFront],
  } = props;
  const { removeVideo, addVideo } =
    useVideoStore();
  return (
    <PicDisplay
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        ...(isFront
          ? { zIndex: FULLSCREEN_Z }
          : { zIndex: 0 }),
        ...props.cellDimensions,
      }}
      {...(isFront
        ? {}
        : resolvePresence(
            { opacity: 0.9 },
            { opacity: 1 }
          ))}
      onTap={
        props.isDirectorsMode
          ? () =>
              props.videoOrder > -1
                ? removeVideo(
                    props.name
                  )
                : addVideo(props.name)
          : props.onToggle
      }
      {...props}
    />
  );
};
