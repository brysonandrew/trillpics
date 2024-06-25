import type { FC } from "react";
import { TButtonProps, TSvgProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { resolveAccessibilityTitles } from "@brysonandrew/utils-attributes";

type TProps = TButtonProps & {
  Icon: FC<TSvgProps>;
};
export const Button: FC<TProps> = ({
  Icon,
  classValue,
  children,
  title,
  ...props
}) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 _bi-text z-50 pointer-events-none">
      <button
        className="row gap-6"
        {...props}
        {...resolveAccessibilityTitles(
          title
        )}
      >
        <Icon
          classValue={clsx(
            "w-[45px] md:w-[80px] lg:w-[100px]",
            classValue
          )}
        />
        <span className="text-2xl tracking-widest sm:text-5xl lg:text-6xl whitespace-nowrap">
          {children}
        </span>
      </button>
    </div>
  );
};
