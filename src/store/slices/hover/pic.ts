import {
  THoverPicKey,
  THoverPicState,
} from "~/store/slices/hover/types";
import { TStateHandler } from "~/store/types";

export const hoverPicState: TStateHandler<
  THoverPicState
> = (set, get): THoverPicState => ({
  hoverPicKey: null,
  hoverPicProps: null,
  hoverPic: (
    hoverPicKey: THoverPicKey
  ) => {
    console.log(hoverPicKey);
    set({
      hoverPicKey,
      hoverPicProps: JSON.parse(
        hoverPicKey
      ),
    });
  },
  unhoverPic: (
    hoverPicKey: THoverPicKey
  ) => {
    if (
      hoverPicKey === get().hoverPicKey
    ) {
      set({
        hoverPicKey: null,
      });
    }
  },
});
