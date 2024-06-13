import { FC } from "react";
import { NOOP } from "@brysonandrew/utils-function";
import { PillBHover, TPillBHoverProps } from "~/components/buttons/pill/b/hover";
import { IconsRedo } from "~/components/icons/redo";
import { useTemporalStore } from "~/store/middleware/5.temporal/store";

export const LeftButtonsRedo: FC<
{
    Button?: FC<
    Partial<TPillBHoverProps>
  >;
  }
> = ({
  Button = PillBHover,
  ...props
}) => {
  const { redo, futureStates } =
    useTemporalStore((state) => state);
  const isNoFuture =
    futureStates.length === 0;

  const title = `${
    isNoFuture ? "Nothing to " : ""
  }Redo`;
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
