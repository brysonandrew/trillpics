import type { FC } from "react";

type TProps = {
  sequenceIndex: number;
  activeButton: any;
  resolveCheckRandom?: any;
};
export const MusicLayoutButtons: FC<
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
  //   <MusicLayoutButton
  //     isActive={
  //       activeButton === "none"
  //     }
  //     title="uncheck all"
  //     onClick={() =>
  //       uncheckAll(sequenceIndex)
  //     }
  //   >
  //     None
  //   </MusicLayoutButton>

  //   <>
  //     {GAP_FILLS.map((n) => {
  //       const text = `${n}${
  //         ["", "st", "nd", "rd"][n] ??
  //         "th"
  //       }`;
  //       return (
  //         <MusicLayoutButton
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
  //         </MusicLayoutButton>
  //       );
  //     })}
  //   </>
  //   <MusicLayoutButton
  //     title="check all"
  //     isActive={
  //       activeButton === "all"
  //     }
  //     onClick={() =>
  //       checkAll(sequenceIndex)
  //     }
  //   >
  //     All
  //   </MusicLayoutButton>
  //   <MusicLayoutButton
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
  //   </MusicLayoutButton>
  // </div>
};
