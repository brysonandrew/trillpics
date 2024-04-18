import type { FC } from "react";
import {
  TChildren,
  TClassValueProps,
  TSvgProps,
} from "@brysonandrew/config-types";
import clsx from "clsx";

type TProps = TClassValueProps & {
  children: TChildren;
  Icon: FC<TSvgProps>;
};
export const Button: FC<TProps> = ({
  Icon,
  classValue,
  children,
}) => {
  return (
    <div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 _gradient-text z-60 pointer-events-none">
        <div className="row gap-6">
          <Icon
            classValue={clsx(
              "w-[45px] md:w-[80px] lg:w-[100px]",
              classValue
            )}
          />
          <code className="text-2xl sm:text-5xl lg:text-6xl font-display-led whitespace-nowrap">
            {children}
          </code>
        </div>
      </div>
    </div>
  );
};
