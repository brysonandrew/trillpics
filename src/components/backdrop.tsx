import { TUseImageReturn } from "@/components/pic/useImage";
import { useViewport } from "@/hooks/window/useViewport";
import { useVideoStore } from "@/store";
import { FC, Fragment } from "react";

type TProps = {
  backdropProps?: TUseImageReturn["backdropProps"];
  isOpen?: boolean;
};
export const Backdrop: FC<TProps> = ({
  isOpen,
  backdropProps,
}) => {
  const {
    isPreviewOpen,
    togglePreview,
  } = useVideoStore();
  const viewport = useViewport();

  return (
    <>
      {isPreviewOpen ? (
        <div
          onClick={() => {
            console.log("click");
            togglePreview(false);
          }}
          className="inset-0 z-60 fade-in-animation cursor-pointer"
          style={{
            zIndex: 0,
            ...(viewport.isDimensions
              ? ({
                  position: "fixed",
                  width: viewport.width,
                  height:
                    viewport.height,
                } as const)
              : ({} as const)),
            backdropFilter:
              "blur(40px) grayscale(100%)",
            cursor: "zoom-out",
          }}
          {...backdropProps}
        />
      ) : (
        <Fragment />
      )}
    </>
  );
};
