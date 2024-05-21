import type { FC } from "react";
import { Box } from "~/pics/grid/pic/box";
import { TPic } from "~/store/state/pics/types";
import { PicDisplayCell } from "~/pics/grid/pic/cell";
import { FULLSCREEN_Z } from "~/constants/dom";
import { usePicSelectedRead } from "~/hooks/pic/selected/read";

export type TCell = {
  row: number;
  column: number;
};
export type TPicProps = TCell & {
  name: TPic;
};
export const Pic: FC<TPicProps> = ({
  name,
  ...cell
}) => {
  const { isSelected, isRemoving } =
    usePicSelectedRead(cell);

    if (isRemoving) {
      console.log(isRemoving, isSelected)

    }
  return (
    <Box
      cursor="pointer"
      name={name}
      {...cell}
    >
      {({ ...boxChildProps }) => {
        if (isSelected) return null;

        return (
          <PicDisplayCell
            {...boxChildProps}
            style={{
              ...boxChildProps.style,
              zIndex: isRemoving
                ? FULLSCREEN_Z
                : 0,
            }}
          />
        );
      }}
    </Box>
  );
};

// <motion.img
//   src={resolvePicSrc(name)}
//   key={name}
//   layoutId={name}
//   className="fill"
//   alt={`░▒▓█ pic #${name} █▓▒░`}
//   draggable={false}
// />
// onLayoutAnimationComplete={
//   handleLayoutAnimationComplete
// }
// {...(isRemoving
//   ?
//{
//       style: {
//         zIndex:
//           FULLSCREEN_Z,
//         ...style,
//       },
//     }
//   : {
//       ...resolvePresence(
//         { opacity: 0.9 },
//         { opacity: 1 }
//       ),
//       style: {
//         zIndex: 0,
//         backgroundColor:
//           isAdded
//             ? isRemoving
//               ? "blue"
//               : "red"
//             : "",
//         ...style,
//       },
//     })}
