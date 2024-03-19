import { FC, Fragment } from "react";
import { TUseImageReturn } from "@components/images/useImage";
import { Portal } from "@components/images/Portal";
import { resolveCompositeKey } from "@utils/keys";
import { TPassedProps } from "@components/images/item/image/config/types";
import { Backdrop } from "./Backdrop";
import { Design } from "./Design";

type TProps = Omit<
  TUseImageReturn,
  "boxProps"
> &
  TPassedProps & { name: number };
export const Image: FC<TProps> = ({
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
