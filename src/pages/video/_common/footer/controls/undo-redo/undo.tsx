import type { FC } from "react";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { NOOP } from "@brysonandrew/utils-function";
import { IconsUndo } from "~/components/icons/undo";
import { useTemporalStore } from "~/store/middleware/5.temporal/store";

export const ControlsUndo: FC<
  TVideoFooterProps
> = ({
  Button = PillBHover,
  ...props
}) => {
  const { undo, pastStates } =
    useTemporalStore((state) => state);
  const isNoPast =
    pastStates.length === 0;
  const title = `Undo ${
    isNoPast ? "[disabled]" : ""
  }`;
  return (
    <Button
      disabled={isNoPast}
      onClick={
        isNoPast ? NOOP : () => undo()
      }
      {...props}
      title={title}
      Icon={IconsUndo}
    >
      {title}
    </Button>
  );
};
