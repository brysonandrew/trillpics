import type { FC } from "react";
import { motion } from "framer-motion";
import { Box } from "~/shell/pics/pic/box";
import { PicDirectorsModeCell } from "~/pages/directors-mode/pic/cell";
import { TPicProps } from "~/shell/pics/pic";
import { useTrillPicsStore } from "~/store";
import { resolveSquare } from "@brysonandrew/measure";

type TProps = TPicProps;
export const DirectorsModePic: FC<
  TProps
> = (props) => {
  const {
    videoPics,
    removeVideoPic,
    addVideoPic,
    table,
  } = useTrillPicsStore(
    ({
      videoPics,
      removeVideoPic,
      addVideoPic,
      table,
    }) => ({
      videoPics,
      removeVideoPic,
      addVideoPic,
      table,
    })
  );
  return (
    <motion.div
      className="fixed bg-black-01 border pointer-events-none"
      layoutId="Directors mode hover"
      style={{
        left:
          props.columnIndex *
          table.size,
        top:
          props.rowIndex * table.size,
        ...resolveSquare(table.size),
      }}
    >
      <PicDirectorsModeCell
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
