import type { FC } from "react";
import { IconsBack } from "@/components/icons/back";
import { IconsPlay } from "@/components/icons/play";
import { FooterView } from "@/pages/home/footer/show";
import { BPill } from "@/components/interactive/b-pill";
import { useVideoStore } from "@/store";

export const FooterPlayer: FC = () => {
  const {
    isPreviewOpen,
    togglePreview,
  } = useVideoStore();

  const handlePreview = () => {
    togglePreview(!isPreviewOpen);
  };

  return (
    <div className="column-reverse items-start justify-center gap-2 h-32">
      <BPill
        title={isPreviewOpen ? "Exit video preview"  : "View video preview"}
        onClick={handlePreview}
        Icon={
          isPreviewOpen
            ? IconsBack
            : IconsPlay
        }
      >
        {isPreviewOpen ? (
          <>Back</>
        ) : (
          <>Preview</>
        )}
      </BPill>
      {!isPreviewOpen && <FooterView />}
    </div>
  );
};
