import { FC } from "react";
import clsx from "clsx";
import { BORDER_GRADIENT } from "@constants/css/gradient";
import { TButtonProps } from "@brysonandrew/config-types";
import { Background } from "@components/decoration/background";

type TProps = TButtonProps;
export const Button: FC<TProps> = ({
  children,
  classValue,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'interactive interactive-rect',
        "relative px-5 h-14 text-xl text-white dark:text-gray-8",
        classValue
      )}
      {...props}
    >
            <Background/>
        <div
          className="fill border-4"
          style={BORDER_GRADIENT}
        /> 
        <div className="relative flex items-center gap-2">
          {children}
        </div>
    </button>
  );
};
