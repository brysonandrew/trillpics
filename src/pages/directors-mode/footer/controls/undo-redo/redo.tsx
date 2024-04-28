import { FC } from "react";
import { NOOP } from "@brysonandrew/utils-function";
import { TDirectorsModeFooterProps } from "~/pages/directors-mode/footer/types";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { IconsRedo } from "~/components/icons/redo";
import { useTemporalStore } from "~/store/middleware/temporal/store";

export const ControlsRedo: FC<
  TDirectorsModeFooterProps
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
