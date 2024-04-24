import { useCallback } from "react";
import { RenderLoading } from "@remotion/player";
import { IconsLoader } from "~/components/icons/loader";
import { Button } from "~/components/remotion/player/overlays/button";

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
            <div
              className="fill center z-50"
              style={{ width, height }}
            >
              <Button
                classValue="spin1"
                Icon={IconsLoader}
              >
                Loading
              </Button>
            </div>
          );
        }
        return null;
      },
      []
    );
  return renderLoading;
};
