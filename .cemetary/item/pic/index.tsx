import { FC, Fragment } from "react";
import { TUseImageReturn } from "@components/pics/useImage";
import { Portal } from "@components/pics/Portal";
import { resolveCompositeKey } from "@utils/keys";
import { TPassedProps } from "@components/pics/item/pic/config/types";
import { Backdrop } from "./Backdrop";
import { Design } from "./Design";

type TProps = Omit<
  TUseImageReturn,
  "boxProps"
> &
  TPassedProps & { name: string };
export const Pic: FC<TProps> = ({
  name,
  isOpen,
  isHover,
  designProps,
  backdropProps,
  onToggle,
  ...passedProps
}) => {
  const Root = isOpen
    ? Portal
    : Fragment;

  const uniqueId = resolveCompositeKey(
    name,
    `shop:${passedProps.isShop}`
  );

  return (
    <Root>
      <Backdrop
        isOpen={isOpen}
        backdropProps={backdropProps}
      />
      <Design
        layoutId={`design:${uniqueId}`}
        {...designProps}
      />
    </Root>
  );
};
