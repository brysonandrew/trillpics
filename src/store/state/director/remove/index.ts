import { VideoPic } from "~/pages/video/_common/pic";
import { TDirectorRemoveState } from "~/store/state/director/types";
import { TPics } from "~/store/state/pics/types";
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
