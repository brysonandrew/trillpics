import type { FC } from "react";
import { TButtonProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { MusicRowsLayout } from "~/pages/video/music/rows/layout";

type TProps = Partial<
  TButtonProps & { isActive: boolean }
>;
export const MusicRowsButton: FC<
  TProps
> = (props) => {
  const {
    children,
    isActive,
    classValue,
    ...rest
  } = props;

  return (
    <button
      title="check all"
  
      className={clsx(
        classValue
      )}
      {...rest}
    >
      <MusicRowsLayout
        {...props}
      />
    </button>
  );
};
