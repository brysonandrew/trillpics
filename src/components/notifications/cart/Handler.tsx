import {
  FC,
  useEffect,
  useState,
} from 'react';
import styled from '@emotion/styled';
import { I } from '@components/Icon';
import { FADE_PRESENCE } from '@constants/animation';
import { TICK_ICON } from '@constants/icons';
import { motion } from 'framer-motion';
import { TNotificationsContext } from '@context/checkout/config';
import { useDelayCallback } from '@hooks/window/useDelayCallback';

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
    onNotificationsRemove(notifications);
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

  if (isAdding) return null;
  return (
    <Root
      {...FADE_PRESENCE}
      onTap={terminateNotifications}
      className='cover-fixed center w-full h-full inset-0 bg-black-07 text-4xl z-50 pointer-events-none'
    >
      <div className='column gap-8'>
        <header className='row gap-4'>
          <I
            icon={
              isAdding
                ? 'bi:cart-check-fill'
                : TICK_ICON
            }
          />
          <samp className='tracking-widest uppercase'>
            {isAdding
              ? 'adding '
              : 'added '}
            to cart
          </samp>
        </header>
      </div>
    </Root>
  );
};
