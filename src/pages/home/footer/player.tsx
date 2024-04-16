import type { FC } from "react";
import { IconsBack } from "@/components/icons/back";
import { IconsPlay } from "@/components/icons/play";
import { FooterShow } from "@/pages/home/footer/show";
import { BPill } from "@/components/interactive/b-pill";
import { useVideoStore } from "@/store";
import { IconsBack1 } from "@/components/icons/back1";

export const FooterPlayer: FC = () => {
  const {
    isPreviewOpen,
    togglePreview,
  } = useVideoStore();

  const handlePreview = () => {
    togglePreview(!isPreviewOpen);
  };

  return (
      <BPill
        title={
          isPreviewOpen
            ? "Exit video preview"
            : "View video preview"
        }
        onClick={handlePreview}
        Icon={
          isPreviewOpen
            ? IconsBack1
            : IconsPlay
        }
      >
      {isPreviewOpen ? (
          <>Exit Preview</>
        ) : (
          <>Preview</>
        )}
      </BPill>
  );
};
