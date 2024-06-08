import { FC } from "react";
import { TPillBProps } from "~/components/buttons/pill/b";
import { Circle } from "~/components/layout/circle/circle";

type TProps = Pick<
  TPillBProps,
  "Icon"
> &
  Partial<
    Pick<
      TPillBProps,
      "iconProps" | "circleProps"
    >
  >;
export const CircleIcon: FC<TProps> = ({
  Icon,
  iconProps,
  circleProps,
}) => {
  return (
    <Circle {...circleProps} layout>
      <div className="p-1">
        {Icon && (
          <Icon
            {...(iconProps ?? {})}
          />
        )}
      </div>
    </Circle>
  );
};
