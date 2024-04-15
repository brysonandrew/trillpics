import { FC } from "react";
import clsx from "clsx";
import {
  TButtonProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import {
  Circle,
  TCircleProps,
} from "@components/decoration/circle";

type TProps = TButtonProps & {
  Icon: FC<TSvgProps>;
  iconProps?: TSvgProps;
  circleProps?: TCircleProps;
};
export const Button: FC<TProps> = ({
  Icon,
  iconProps,
  circleProps,
  children,
  classValue,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "row relative h-14 pr-4 mr-4 text-lg text-white dark:text-gray-8",
        classValue
      )}
      {...props}
    >
      <div className="absolute inset-0 dark:bg-black bg-gray-6 opacity-50 rounded-full" />
      <Circle {...circleProps}>
        <Icon
          width={28}
          height={28}
          {...(iconProps ?? {})}
        />
      </Circle>
      <div className="relative flex items-center gap-2 whitespace-nowrap">
        {children}
      </div>
    </button>
  );
};
