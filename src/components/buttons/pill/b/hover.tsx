import type { FC } from "react";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import {
  useHoverKey,
  NONE_CURSOR_KEY,
} from "@brysonandrew/motion-cursor";

type TProps = TPillBProps;
export const PillBHover: FC<TProps> = ({
  title,
  children = title,
  ...props
}) => {
  const { isHover, handlers } =
    useHoverKey(NONE_CURSOR_KEY, title);

  return (
    <PillB
      title={title}
      {...handlers}
      {...props}
    >
      {isHover ? children : ""}
    </PillB>
  );
};
