import { FC } from "react";
import { NOOP } from "@brysonandrew/utils-function";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { IconsRedo } from "~/components/icons/redo";
import { useTemporalStore } from "~/store/middleware/temporal/store";

export const ControlsRedo: FC<
  TVideoFooterProps
> = ({
  Button = PillBHover,
  ...props
}) => {
  const { redo, futureStates } =
    useTemporalStore((state) => state);
  const isNoFuture =
    futureStates.length === 0;

  const title = `Redo${
    isNoFuture ? " [disabled]" : ""
  }`;
  return (
    <Button
      disabled={isNoFuture}
      onClick={
        isNoFuture ? NOOP : () => redo()
      }
      {...props}
      title={title}
      Icon={IconsRedo}
    >
      {title}
    </Button>
  );
};
