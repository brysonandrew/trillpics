import { useCallback } from "react";
import { RenderLoading } from "@remotion/player";
import { LoadingOverlay } from "~/components/remotion/player/overlays/loading/overlay";

export const useLoading = () => {
  const renderLoading: RenderLoading =
    useCallback(
      ({ isBuffering, ...props }) => {
        if (isBuffering) {
          return (
            <LoadingOverlay
              style={props}
            >
              Loading
            </LoadingOverlay>
          );
        }
        return null;
      },
      []
    );
  return renderLoading;
};
