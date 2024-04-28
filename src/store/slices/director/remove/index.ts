import { PicDirectorsMode } from "~/shell/pics/pic/directors-mode";
import { TDirectorRemoveState } from "~/store/slices/director/types";
import { TPics } from "~/store/slices/pics/types";
import { TStateHandler } from "~/store/types";
import { isDefined } from "~/utils/validation/is/defined";
import { isNull } from "~/utils/validation/is/null";

export const directorRemoveState: TStateHandler<
  TDirectorRemoveState
> = (
  set,
  get
): TDirectorRemoveState => ({
  removeVideoPic: (
    picRemoving?: string
  ) => {
    get().removeVideoPics(
      isDefined(picRemoving)
        ? [picRemoving]
        : null
    );
  },
  removeVideoPics: (
    nextPics: TPics | null
  ) => {
    let videoPics: TPics = [];
    if (!isNull(nextPics)) {
      videoPics = get().videoPics;
      nextPics.forEach(
        (picRemoving) => {
          videoPics = [
            ...new Set([
              ...videoPics.filter(
                (v) => v !== picRemoving
              ),
            ]),
          ];
        }
      );
    }

    if (videoPics.length === 0) {
      get().updatePicsEntries({
        cells: get().picsEntries[0],
        PicFc: PicDirectorsMode,
      });
    }
    const durationInFrames =
      videoPics.length * get().fps;
    set({
      videoPics,
      durationInFrames,
    });
  },
});
