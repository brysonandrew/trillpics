import { FC, Fragment } from "react";
import { useViewport } from "@brysonandrew/viewport";
import { useVideoStore } from "~/store";

type TProps = {
  backdropProps?: any;
  isOpen?: boolean;
};
export const Backdrop: FC<TProps> = ({
  backdropProps,
}) => {
  const { isPlayerOpen, togglePlayer } =
    useVideoStore();
  const viewport = useViewport();

  return (
    <>
      {isPlayerOpen ? (
        <div
          onClick={() => {
            togglePlayer(false);
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
