import { useCallback } from "react";
import { RenderLoading } from "@remotion/player";
import { OverlaysContent } from "~/components/remotion/player/overlays/content";

export const useLoading = () => {
  const renderLoading: RenderLoading =
    useCallback(
      ({
        isBuffering,
        width,
        height,
      }) => {
        if (true) {
          return (
            <OverlaysContent>
              <div
                className="spin1"
                style={{
                  width,
                  height,
                }}
              >
                Loading
              </div>
            </OverlaysContent>
          );
        }
        return null;
      },
      []
    );
  return renderLoading;
};
