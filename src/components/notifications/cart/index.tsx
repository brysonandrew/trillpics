import { useCheckout } from '@context/checkout';
import { useWorkshop } from '@pages/list/context';
import { AnimatePresence } from 'framer-motion';
import { Handler } from './Handler';

export const Cart = () => {
  const {
    notifications,
    onNotificationsClear,
  } = useCheckout();
  console.log(notifications);

  return (
    <AnimatePresence>
      {notifications.length > 0 && (
        <Handler
          key='handler'
          notifications={notifications}
          onNotificationsClear={
            onNotificationsClear
          }
        />
      )}
    </AnimatePresence>
  );
};
