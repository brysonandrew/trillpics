import { FC, Fragment } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { TUseImageReturn } from "@components/pics/useImage";
import { useHoverKey } from "@brysonandrew/cursor";
import { Pill } from "@components/decoration/Pill";
import clsx from "clsx";
import { TUseLocalStorageForm } from "@shell/providers/context/checkout/useLocalStorageForm";
import { TSpecifications } from "@t/image";
import { I } from "@brysonandrew/icons-i";
import {
  PLUS_ICON,
  TIMES_ICON,
} from "@brysonandrew/icons-keys/text";
import { useCheckout } from "@shell/providers/context/checkout";
import { resolveCompositeKey } from "@utils/keys";
import { N } from "@components/layout/text/N";
import { TPassedProps } from "@components/pics/item/pic/config/types";
import { Text } from "./Text";
import { Remove } from "./specifications/Remove";
import { AddedItems } from "./AddedItems";
import { useCartItems } from "./useCartItems";

type TProps = TPassedProps &
  Pick<
    ReturnType<typeof useHoverKey>,
    "isHover"
  > & {
    src: string;
    name: string;
    isFirstPosition: boolean;
    isShown: boolean;
    style: TUseImageReturn["designProps"]["style"];
    isParentHover: boolean;
    onToggle(): void;
    form: TUseLocalStorageForm<TSpecifications>;
  };
export const Container: FC<TProps> = ({
  src,
  ...props
}) => {
  const {
    name,
    isFirstPosition,
    isShown,
    style,
    onToggle,
    form,
    ...passedProps
  } = props;
  const { isShop } = passedProps;
  const classValue =
    "absolute left-1/2 container -translate-x-1/2";
  const Root = isFirstPosition
    ? Fragment
    : motion.div;
  const sharedStyle = {
    position: style.position,
    zIndex: style.zIndex,
  };
  const { record } = useCheckout();
  const cartItems = useCartItems({
    name,
    src,
    record,
  });

  return (
    <Root
      {...(isFirstPosition
        ? {}
        : {
            className: clsx(
              classValue,
              "top-0 pointer-events-none"
            ),
            style: {
              height: style.height,
              ...sharedStyle,
            },
          })}
    >
      <>
        <>
          {src ? (
            <Text
              key="text"
              name={name}
              isFirstPosition={
                isFirstPosition
              }
              src={src}
              initial={false}
              animate={{
                opacity:
                  isShown ||
                  cartItems.length > 0
                    ? 1
                    : 0.5,
              }}
              style={sharedStyle}
              layoutId={resolveCompositeKey(
                "Text",
                src
              )}
            >
              {!isShop && (
                <>
                  <I
                    icon={TIMES_ICON}
                  />
                  <N>
                    {passedProps.count}
                  </N>
                </>
              )}
            </Text>
          ) : null}
        </>
        <AnimatePresence
          initial={false}
        >
          {isFirstPosition && (
            <>
              {isShop ? (
                <>
                  {cartItems.length >
                  0 ? (
                    <AddedItems
                      name={name}
                      src={src}
                      cartItems={
                        cartItems
                      }
                      {...passedProps}
                    />
                  ) : (
                    <Pill
                      key="enter"
                      isCircle
                      classValue="absolute bottom-6 right-6 pointer-events-none"
                      gradient="bg-green-emerald-primary"
                      animate={{
                        opacity: isShown
                          ? 1
                          : 0.5,
                      }}
                    >
                      <I
                        icon={PLUS_ICON}
                      />
                    </Pill>
                  )}
                </>
              ) : (
                <Remove
                  key="remove"
                  title="remove"
                  classValue="absolute bottom-6 left-6"
                  {...passedProps}
                >
                  {passedProps.count?.toLocaleString()}
                </Remove>
              )}
            </>
          )}
        </AnimatePresence>
      </>
    </Root>
  );
};
