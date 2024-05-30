import type { FC } from "react";
import { OverlaysContent } from "~/components/remotion/player/overlays/content";
import type { TDivProps } from "@brysonandrew/config-types/dom";

type TProps = TDivProps;
export const ScreenTooSmallOverlay: FC<
  TProps
> = ({ children, ...props }) => {
  return (
    <OverlaysContent>
      <div
        className="row gap-2"
        {...props}
      >
        Screen too small
      </div>
    </OverlaysContent>
  );
};
