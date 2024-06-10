import type { FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { MusicRowsButton } from "~/pages/video/music/rows/buttons/button";
import { GAP_FILLS } from "~/pages/video/music/rows/buttons/constants";

type TProps = {
  sequenceIndex: number;
  activeButton: any;
  resolveCheckRandom?: any;
};
export const MusicRowsButtons: FC<
  TProps
> = ({
  sequenceIndex,
  activeButton,
  resolveCheckRandom,
}) => {
  // const {
  //   checkAll,
  //   uncheckAll,
  //   checkEveryNth,
  //   checkRandomBeats,
  // } = useTrillPicsStore(
  //   ({
  //     checkAll,
  //     uncheckAll,
  //     checkEveryNth,
  //     checkRandomBeats,
  //   }) => ({
  //     checkAll,
  //     uncheckAll,
  //     checkEveryNth,
  //     checkRandomBeats,
  //   })
  // );
  return null;
  // <div className="relative row gap-1 lg:gap-4">
  //   <MusicRowsButton
  //     isActive={
  //       activeButton === "none"
  //     }
  //     title="uncheck all"
  //     onClick={() =>
  //       uncheckAll(sequenceIndex)
  //     }
  //   >
  //     None
  //   </MusicRowsButton>

  //   <>
  //     {GAP_FILLS.map((n) => {
  //       const text = `${n}${
  //         ["", "st", "nd", "rd"][n] ??
  //         "th"
  //       }`;
  //       return (
  //         <MusicRowsButton
  //           key={text}
  //           isActive={
  //             activeButton === n
  //           }
  //           title={`check every ${text}`}
  //           onClick={() =>
  //             checkEveryNth(
  //               sequenceIndex,
  //               n
  //             )
  //           }
  //         >
  //           {text}
  //         </MusicRowsButton>
  //       );
  //     })}
  //   </>
  //   <MusicRowsButton
  //     title="check all"
  //     isActive={
  //       activeButton === "all"
  //     }
  //     onClick={() =>
  //       checkAll(sequenceIndex)
  //     }
  //   >
  //     All
  //   </MusicRowsButton>
  //   <MusicRowsButton
  //     title="check random"
  //     isActive={activeButton === null}
  //     onClick={() => {
  //       if (resolveCheckRandom) {
  //         resolveCheckRandom(
  //           sequenceIndex
  //         );
  //         return;
  //       }
  //       checkRandomBeats(sequenceIndex);
  //     }}
  //   >
  //     Random
  //   </MusicRowsButton>
  // </div>
};
