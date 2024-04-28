import { FC } from "react";
import { TPillBProps } from "~/components/buttons/pill/b";
import { CircleSm } from "~/components/decoration/circle/sm";

type TProps = Pick<
  TPillBProps,
  "Icon" | "iconProps" | "circleProps"
>;
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
