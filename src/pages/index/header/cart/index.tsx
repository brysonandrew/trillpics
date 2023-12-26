import { Circle } from '@components/decoration/Circle';
import { I } from '@components/Icon';
import { useCheckout } from '@context/checkout';
import { Rainbow } from '@css/Rainbow';
import { motion } from 'framer-motion';
import { ICON_CLASS_VALUE_PROPS } from '../config';
import { Item } from '../Item';

export const Cart = () => {
  const { count } = useCheckout();
  return (
    <Item
      Root={motion.a}
      title='Cart'
      icon={
        <>
          <I
            className='relative h-6 w-6'
            icon='mdi:cart'
            {...ICON_CLASS_VALUE_PROPS}
          />
          <Circle classValue="absolute top-0 right-0">
            {count.toLocaleString()}
          </Circle>
        </>
      }
    >
      <>Cart</>
    </Item>
  );
};
