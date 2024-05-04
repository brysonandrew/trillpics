import type { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { useTrillPicsStore } from "~/store";
import { TPicHoverResult } from "~/pics/pic/use-hover";
import { Floating } from "~/pics/pic/floating";

export type TPicHoverProps = Pick<
  TPicHoverResult,
  "isHovering"
>;
export const PicHover: FC<
  TPropsWithChildren<TPicHoverProps>
> = ({ isHovering, children }) => {
  const { isControls } =
    useTrillPicsStore(
      ({ isControls }) => ({
        isControls,
      })
    );

  return (
    <>
      {isHovering && isControls && (
        <Floating>{children}</Floating>
      )}
    </>
  );
};
