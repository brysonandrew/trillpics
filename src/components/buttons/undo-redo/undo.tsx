import type { FC } from "react";
import { PillBHover, TPillBHoverProps } from "~/components/buttons/pill/b/hover";
import { NOOP } from "@brysonandrew/utils-function";
import { IconsUndo } from "~/components/icons/undo";
import { useTemporalStore } from "~/store/middleware/5.temporal/store";

export const LeftButtonsUndo: FC<
{
  Button?: FC<
  Partial<TPillBHoverProps>
>;
}
> = ({
  Button = PillBHover,
  ...props
}) => {
  const { undo, pastStates } =
    useTemporalStore((state) => state);
  const isNoPast =
    pastStates.length === 0;
  const title = `${
    isNoPast ? "Nothing to " : ""
  }Undo`;
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
