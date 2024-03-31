import { IconsBackView } from "@components/icons/back-view";
import { IconsForwardView } from "@components/icons/forward-view";
import { Button } from "@pages/home/footer/button";
import { useShow } from "@pages/home/footer/useShow";
import type { FC } from "react";

export const FooterView: FC = () => {
  const {
    isViewingOnlyVideoPics,
    videoPicsCount,
    onToggleShow,
  } = useShow();

  return (
    <Button
      title="View video preview"
      onClick={onToggleShow}
      Icon={
        isViewingOnlyVideoPics
          ? IconsBackView
          : IconsForwardView
      }
    >
      {isViewingOnlyVideoPics ? (
        <>Show all</>
      ) : (
        <>
          Show {`[${videoPicsCount}]`}
        </>
      )}
    </Button>
  );
};
