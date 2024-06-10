type TConfig = any;
export const resolveIndex = (
  config: TConfig
) => {
  // return {
  //   updateOne: (
  //     type: TMusicKey,
  //     key: TSourceKey<typeof type>,
  //     value: TStepValue
  //   ) => {
  //     set((draft: TState) => {
  //       draft.music.beats[
  //         sequenceIndex
  //       ].steps[beatIndex] = checked
  //         ? 1
  //         : 0;
  //       draft.music.beats[
  //         sequenceIndex
  //       ].activeButton =
  //         get().resolveActiveButton(
  //           draft.music.beats[
  //             sequenceIndex
  //           ].steps
  //         );
  //     });
  //   },
  //   checkRandomBeats: (key) => {
  //     set((draft: TState) => {
  //       draft.music.beat[key] =
  //         STEPS.map((_) =>
  //           Math.round(Math.random())
  //         ) as TBeats;
  //     });
  //   },
  //   checkRandomMidis: (key) => {
  //     set((draft: TState) => {
  //       draft.music.midis[
  //         sequenceIndex
  //       ].steps = STEPS.map((_) =>
  //         Math.round(Math.random() * 32)
  //       );
  //       draft.music.midis[
  //         sequenceIndex
  //       ].activeButton = null;
  //     });
  //   },
  //   checkAll: (key) => {
  //     set((draft: TState) => {
  //       draft.music.midis[
  //         sequenceIndex
  //       ].steps = STEPS.map((_) => 1);
  //       draft.sequences[
  //         sequenceIndex
  //       ].activeButton = "all";
  //     });
  //   },
  //   uncheckAll: (key) => {
  //     set((draft: TState) => {
  //       draft.sequences[
  //         sequenceIndex
  //       ].steps = STEPS.map((_) => 0);
  //       draft.sequences[
  //         sequenceIndex
  //       ].activeButton = "none";
  //     });
  //   },
  //   checkEveryNth: (
  //     key,
  //     n: TGapFill
  //   ) => {
  //     set((draft: TState) => {
  //       draft.sequences[
  //         sequenceIndex
  //       ].steps = STEPS.map(
  //         (_, index) =>
  //           index % n === 0 ? 1 : 0
  //       );
  //       draft.sequences[
  //         sequenceIndex
  //       ].activeButton = n;
  //     });
  //   },
  // };
};
