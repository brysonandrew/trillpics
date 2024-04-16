import type { FC } from "react";
import { IconsViewBack } from "@/components/icons/view/back";
import { IconsViewForward } from "@/components/icons/view/forward";
import { BPill } from "@/components/interactive/b-pill";
import { useShow } from "@/pages/home/footer/show/use-show";

import {
  NONE_CURSOR_KEY,
  useHoverKey,
} from "@brysonandrew/cursor";
import { IconsVisible } from "@/components/icons/visible";

export const FooterShow: FC = () => {
  const {
    isViewingOnlyVideoPics,
    videoPicsCount,
    onToggleShow,
    isPreviewOpen,
    isVideoMode,
  } = useShow();
  const { isHover, handlers } =
    useHoverKey(
      NONE_CURSOR_KEY,
      "FooterShow"
    );

  return (
    <BPill
      title={
        isViewingOnlyVideoPics
          ? "Show all pics added to video"
          : `Show only ${videoPicsCount} pics added to video`
      }
      onClick={onToggleShow}
      Icon={
        IconsVisible
        // isViewingOnlyVideoPics
        //   ? IconsViewBack
        //   : IconsViewForward
      }
      {...(isVideoMode && !isPreviewOpen
        ? {}
        : {})}
      {...handlers}
    >
      {isHover && (
        <>
          {isViewingOnlyVideoPics ? (
            <>Show all</>
          ) : (
            <>Show</>
          )}
        </>
      )}
    </BPill>
  );
};
