import { TUseImageReturn } from '@components/images/useImage';
import { useHoverKey } from '@brysonandrew/cursor';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { FC, Fragment } from 'react';
import { Text } from './Text';
import { Pill } from '@components/decoration/Pill';
import clsx from 'clsx';
import { Remove } from './specifications/Remove';
import { TUseLocalStorageForm } from '@shell/providers/context/checkout/useLocalStorageForm';
import { TSpecifications } from '@t/image';
import { AddedItems } from './AddedItems';
import { I } from '@components/Icon';
import {
  PLUS_ICON,
  TIMES_ICON,
} from '@brysonandrew/icons-keys/text';
import { useCheckout } from '@shell/providers/context/checkout';
import { useCartItems } from './useCartItems';
import { resolveCompositeKey } from '@utils/keys';
import { N } from '@components/layout/text/N';
import { TPassedProps } from '@components/images/item/image/config/types';

type TProps = TPassedProps &
  Pick<
    ReturnType<typeof useHoverKey>,
    'isHover'
  > & {
    uniqueId: string;
    isFirstPosition: boolean;
    isShown: boolean;
    style: TUseImageReturn['imageProps']['style'];
    isParentHover: boolean;
    onToggle(): void;
    form: TUseLocalStorageForm<TSpecifications>;
  };
export const Container: FC<TProps> = ({
  uniqueId,
  ...props
}) => {
  const {
    isFirstPosition,
    isShown,
    style,
    onToggle,
    form,
    ...passedProps
  } = props;
  const { isShop, config } =
    passedProps;
  const { name, src } = config;
  const classValue =
    'absolute left-1/2 w-container -translate-x-1/2';
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
              'top-0 pointer-events-none',
            ),
            style: {
              height: style.height,
              ...sharedStyle,
            },
          })}
    >
      <Text
        key='text'
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
          'Text',
          uniqueId,
        )}
      >
        {!isShop && (
          <>
            <I icon={TIMES_ICON} />
            <N>{passedProps.count}</N>
          </>
        )}
      </Text>
      <AnimatePresence initial={false}>
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
                    key='enter'
                    isCircle
                    classValue='absolute bottom-6 right-6 pointer-events-none'
                    gradient='bg-green-emerald-primary'
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
                key='remove'
                title='remove'
                classValue='absolute bottom-6 left-6'
                {...passedProps}
              >
                {passedProps.count?.toLocaleString()}
              </Remove>
            )}
          </>
        )}
      </AnimatePresence>
    </Root>
  );
};
