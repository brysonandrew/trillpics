import { FC } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
} from "framer-motion";
import { IconsVideo } from "~/components/icons/video/video";
import { PillB } from "~/components/buttons/pill/b";
import { AddRemoveToVideoMarker } from "~/pages/video/_common/pic/controls/add-remove-to-video-marker";
import { useTrillPicsStore } from "~/store/middleware";
import { TPicProps } from "~/pics/grid/pic";
import { TUsePicVideoResult } from "~/pics/grid/pic/hooks/video";
import { TPropsWithChildren } from "@brysonandrew/config-types";

export const VideoControlsCounter: FC<
TPropsWithChildren<TUsePicVideoResult>
> = ({isCellAdded:isAdded,children}) => {
  // const { videoPics, isControls } =
  //   useTrillPicsStore(
  //     ({ videoPics, isControls }) => ({
  //       videoPics,
  //       isControls,
  //     })
  //   );
  // const videoOrder = videoPics.indexOf(
  //   props.name
  // );
  // const isAdded = videoOrder > -1;

  return (
   
  );
};
