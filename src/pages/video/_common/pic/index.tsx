import type { FC } from "react";
import { motion } from "framer-motion";
import { TPicProps } from "~/pics/pic";
import { PicVideoControls } from "~/pages/video/_common/pic/controls";
import { AddRemoveToVideoMarker } from "~/pages/video/_common/pic/controls/counter/add-remove-to-video-marker";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { TVideoState } from "~/store/state/video/types";
import { useReady } from "~/hooks/use-ready";

type TProps = TPicProps &
  TDivMotionProps & Pick<TVideoState,'videoPics'>;
export const VideoPic: FC<
  TProps
> = ({ style, videoPics, ...props }) => {
  const videoOrder = videoPics.indexOf(
    props.name
  );
  const isAdded = videoOrder > -1;
  const isReady = useReady();

  return (
    <motion.div
      className="absolute bg-black-01 center shadow pointer-events-none"
      layoutId="Videos mode hover"
      style={{
        backdropFilter: "blur(14px)",
        ...style,
      }}
    >
      <AddRemoveToVideoMarker
        isAdded={isAdded}
      /> 
      <PicVideoControls
        {...props}
      />
    </motion.div>
  );
};

// <Box cursor="pointer" {...props}>
//   {(boxChildProps, isPicZoomed) => {
//     if (isPicZoomed) return <></>;
// return (    //     );
//   }}
// </Box>
