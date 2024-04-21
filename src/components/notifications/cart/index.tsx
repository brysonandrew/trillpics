import { useCheckout } from '~/context/checkout';
import { AnimatePresence } from 'framer-motion';
import { Handler } from './Handler';

export const Cart = () => {
  const {
    notifications,
    onNotificationsRemove,
  } = useCheckout();

  return (
    <AnimatePresence>
      {notifications?.length > 0 && (
        <Handler
          key='handler'
          notifications={notifications}
          onNotificationsRemove={
            onNotificationsRemove
          }
        />
      )}
    </AnimatePresence>
  );
};
