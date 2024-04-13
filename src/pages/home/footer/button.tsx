import { FC } from "react";
import clsx from "clsx";
import {
  TButtonProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import { Circle } from "@components/decoration/circle";
import { Background } from "@components/decoration/background";
import { BORDER_RADIUS } from "@app/style/border-radius";

type TProps = TButtonProps & {
  Icon: FC<TSvgProps>;
};
export const Button: FC<TProps> = ({
  Icon,
  children,
  classValue,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "row relative h-18 pr-4 mr-4 text-lg text-white dark:text-gray-8",
        classValue
      )}
      {...props}
    >
      <Background style={{borderRadius:BORDER_RADIUS.XL}} />
      <Circle>
        <Icon width={28} height={28} />
      </Circle>
      <div className="relative flex items-center gap-2 whitespace-nowrap">
        {children}
      </div>
    </button>
  );
};
