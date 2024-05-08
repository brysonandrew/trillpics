import { FC } from "react";
import { TPillBProps } from "~/components/buttons/pill/b";
import { CircleSm } from "~/components/layout/circle/sm";

type TProps = Pick<
  TPillBProps,
  "Icon"
> & Partial<Pick<
TPillBProps,
"iconProps" | "circleProps"
>>;
export const CircleIcon: FC<TProps> = ({
  Icon,
  iconProps,
  circleProps,
}) => {
  return (
    <CircleSm {...circleProps} layout>
      <div className="p-1">
        <Icon {...(iconProps ?? {})} />
      </div>
    </CircleSm>
  );
};
