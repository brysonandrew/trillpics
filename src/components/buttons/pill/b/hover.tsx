import { FC } from "react";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { useHoverKey } from "~/hooks/use-hover-key";
import { isDefined } from "~/utils/validation/is/defined";

type TProps = TPillBProps;
export const PillBHover: FC<TProps> = ({
  title,
  children = title,
  ...props
}) => {
  const { motionHandlers, isHover } =
    useHoverKey();
  const isHovering =
    isDefined<typeof title>(title) &&
    isHover(title);
  return (
    <PillB
      title={title}
      {...motionHandlers(title)}
      {...props}
    >
      {isHovering && children}
    </PillB>
  );
};
