import { TUseImageReturn } from '@components/images/useImage';
import { TUseHoverKey } from '@hooks/cursor/useHoverKey';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  FC,
  Fragment,
  useMemo,
} from 'react';
import { Text } from './Text';
import { Specifications } from './specifications';
import { Circle } from '@components/decoration/Circle';
import clsx from 'clsx';
import { TPassedProps } from '..';
import { Remove } from './specifications/Remove';
import { TUseLocalStorageForm } from '@context/checkout/useLocalStorageForm';
import {
  TPending,
  TSpecifications,
} from '@t/image';
import { useCheckout } from '@context/checkout';
import {
  COLORS,
  SIZES,
} from '@constants/images';
import { resolvePendingId } from '@utils/images/resolvePendingId';
import { resolvePendingRecordId } from '@utils/images/resolvePendingRecordId';
import { AddedItems } from './AddedItems';

type TProps = TPassedProps &
  Pick<TUseHoverKey, 'isHover'> & {
    isFirstPosition: boolean;
    isShown: boolean;
    style: TUseImageReturn['imageProps']['style'];
    isParentHover: boolean;
    onToggle(): void;
    form: TUseLocalStorageForm<TSpecifications>;
  };
export const Container: FC<TProps> = (
  props,
) => {
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
    'absolute left-1/2 -translate-x-1/2 w-container';
  const Root = isFirstPosition
    ? Fragment
    : motion.div;
  const sharedStyle = {
    position: style.position,
    zIndex: style.zIndex,
  };

  return (
    <>
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
        <AnimatePresence>
          {(isShown || !isShop) && (
            <Text
              key='text'
              name={
                isShop
                  ? name
                  : `${name} x ${passedProps.count}`
              }
              isFirstPosition={
                isFirstPosition
              }
              src={src}
              style={sharedStyle}
            />
          )}
          {isFirstPosition && (
            <>
              {isShop ? (
                <AddedItems
                  name={name}
                  src={src}
                >
                  <>
                    {isShown && (
                      <Circle
                        key='enter'
                        classValue='absolute bottom-6 right-6 pointer-events-none'
                        gradient='bg-green-emerald-teal'
                      >
                        +
                      </Circle>
                    )}
                  </>
                </AddedItems>
              ) : (
                <Remove
                  key='remove'
                  classValue='absolute bottom-6 left-6'
                  {...passedProps}
                >
                  {passedProps.count.toLocaleString()}
                </Remove>
              )}
            </>
          )}
          {!isFirstPosition && (
            <>
              <Circle
                key='exit'
                classValue='absolute top-18 right-18 pointer-events-none'
                gradient='bg-fuchsia-pink-rose'
              >
                x
              </Circle>
            </>
          )}
        </AnimatePresence>
      </Root>
      <div
        className={clsx(
          classValue,
          'bottom-0',
        )}
        style={sharedStyle}
      >
        {!isFirstPosition && (
          <Specifications
            key='checkout'
            name={name}
            src={src}
            onToggle={onToggle}
            form={form}
            {...passedProps}
          />
        )}
      </div>
    </>
  );
};
