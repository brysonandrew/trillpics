import type { FC } from "react";
import { motion } from "framer-motion";
import { TPicProps } from "~/shell/pics/pic";
import { PicDirectorsModeControls } from "~/pages/directors-mode/pic/controls";
import { AddRemoveToVideoMarker } from "~/pages/directors-mode/pic/controls/counter/add-remove-to-video-marker";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { TDirectorState } from "~/store/slices/director/types";

type TProps = TPicProps &
  TDivMotionProps & Pick<TDirectorState,'videoPics'>;
export const DirectorsModePic: FC<
  TProps
> = ({ style, videoPics, ...props }) => {
  const videoOrder = videoPics.indexOf(
    props.name
  );
  const isAdded = videoOrder > -1;

  return (
    <motion.div
      className="absolute bg-black-01 center shadow pointer-events-none"
      layoutId="Directors mode hover"
      style={{
        backdropFilter: "blur(14px)",
        ...style,
      }}
    >
      <AddRemoveToVideoMarker
        isAdded={isAdded}
      /> 
      <PicDirectorsModeControls
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
