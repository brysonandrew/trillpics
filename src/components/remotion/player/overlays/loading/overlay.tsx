import type { FC } from "react";
import { OverlaysContent } from "~/components/remotion/player/overlays/content";
import type { TDivProps } from "@brysonandrew/config-types/dom";
import { IconsLoader } from "~/components/icons/loader";

type TProps = TDivProps;
export const LoadingOverlay: FC<
  TProps
> = ({ children, ...props }) => {
  return (
    <OverlaysContent>
      <div
        className="row gap-2"
        {...props}
      >
        <IconsLoader />
        {children}
      </div>
    </OverlaysContent>
  );
};
