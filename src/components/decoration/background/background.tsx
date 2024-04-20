import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { FC } from "react";

type TProps = TDivProps;
export const Background: FC<TProps> = ({
  classValue,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "fill pointer-events-none",
        classValue
      )}
      {...props}
    >
      <div
        className={clsx(
          "fill bg-white-02 backdrop-blur-lg border-white-02 border opacity-light"
        )}
        {...props}
      />
      <div
        className={clsx(
          "fill bg-black-02 backdrop-blur-lg border-black-02 border opacity-dark"
        )}
        {...props}
      />
    </div>
  );
};
