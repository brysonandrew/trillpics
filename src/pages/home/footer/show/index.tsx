import type { FC } from "react";
import { IconsViewBack } from "@/components/icons/view/back";
import { IconsViewForward } from "@/components/icons/view/forward";
import { BPill } from "@/components/interactive/b-pill";
import { useShow } from "@/pages/home/footer/show/use-show";
import { FooterCounter } from "@/pages/home/footer/counter";

export const FooterView: FC = () => {
  const {
    isViewingOnlyVideoPics,
    videoPicsCount,
    onToggleShow,
  } = useShow();

  return (
    <BPill
      title={
        isViewingOnlyVideoPics
          ? "Show all pics added to video"
          : `Show only ${videoPicsCount} pics added to video`
      }
      onClick={onToggleShow}
      Icon={
        isViewingOnlyVideoPics
          ? IconsViewBack
          : IconsViewForward
      }
    >
      {isViewingOnlyVideoPics ? (
        <>Show all</>
      ) : (
        <>
          Show <FooterCounter />
        </>
      )}
    </BPill>
  );
};
