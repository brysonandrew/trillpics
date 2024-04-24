import { FC, useRef } from "react";
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
  const hasLeftRef =
    useRef(false);
  const { isHover, handlers } =
    useHoverKey(NONE_CURSOR_KEY, title);
  const handleMouseLeave = () => {
    hasLeftRef.current = true;
  };
  return (
    <PillB
      title={title}
      onMouseOut={handleMouseLeave}
      {...handlers}
      {...props}
    >
      {isHover && hasLeftRef.current
        ? children
        : ""}
    </PillB>
  );
};
