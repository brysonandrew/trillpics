import type { FC } from "react";
import {
  TChildren,
  TClassValueProps,
} from "@brysonandrew/config-types";

type TProps = {
  children: TChildren;
  Icon: FC<TClassValueProps>;
};
export const Button: FC<TProps> = ({
  Icon,
  children,
}) => {
  return (
    <div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 _gradient-text z-60 pointer-events-none">
        <div className="row gap-4">
          <Icon classValue="w-[45px] md:w-[80px] lg:w-[100px]" />
          <code className="text-2xl sm:text-5xl lg:text-6xl font-display-led whitespace-nowrap">
            {children}
          </code>
        </div>
      </div>
    </div>
  );
};
