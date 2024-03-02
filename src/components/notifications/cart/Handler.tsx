import {
  FC,
  useEffect,
  useState,
} from 'react';
import styled from '@emotion/styled';
import { I } from '@components/Icon';
import { FADE_PRESENCE } from '@constants/animation';
import { CART_ICON, TICK_ICON } from '@brysonandrew/icons-keys';
import { motion } from 'framer-motion';
import { TNotificationsContext } from '@shell/providers/context/checkout/config';
import { useDelayCallback } from '@hooks/window/useDelayCallback';
import { Loading } from './Loading';

const Root = styled(motion.div)``;

type TProps = TNotificationsContext;
export const Handler: FC<TProps> = ({
  notifications,
  onNotificationsRemove,
}) => {
  const [isAdding, setAdding] =
    useState<boolean>(true);

  const endAdding = () => {
    setAdding(false);
  };
  const terminateNotifications = () => {
    onNotificationsRemove(
      notifications,
    );
  };
  const delayAddedFalse =
    useDelayCallback(endAdding, 200);
  const delayAddedNull =
    useDelayCallback(
      terminateNotifications,
      1000,
    );

  useEffect(() => {
    delayAddedFalse();
    delayAddedNull();
  }, []);

  return (
    <Root
      {...FADE_PRESENCE}
      onTap={terminateNotifications}
      className='cover-fixed center w-full h-full inset-0 bg-black-07 text-4xl z-50 pointer-events-none'
    >
      {isAdding ? (
        <div className='cover center'>
          <Loading sizeClassValue='w-24 h-24' />
        </div>
      ) : (
        <div className='column gap-8'>
          <header className='row gap-4'>
            <I
              icon={
                isAdding
                  ? CART_ICON
                  : TICK_ICON
              }
            />
            <h4 className='tracking-widest uppercase'>
              {isAdding
                ? 'adding '
                : 'added '}
              to cart
            </h4>
          </header>
        </div>
      )}
    </Root>
  );
};
