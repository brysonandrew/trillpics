import {
  CSSProperties,
  FC,
  useMemo,
} from 'react';
import { TClassValueProps } from '@t/dom';
import { useCheckout } from '@context/checkout';
import { motion } from 'framer-motion';
import { Add } from './Add';
import clsx from 'clsx';
import { FADE_PRESENCE } from '@constants/animation';
import styled from '@emotion/styled';
import {
  SIZES,
  COLORS,
} from '@context/checkout/config';

const Label = styled.label`
  html:not(.dark) & input + div {
    background-color: var(--gray-05);
  }
  html:not(.dark)
    &
    input:checked
    + div {
    background-color: var(--white-05);
    border: 1px solid var(--white);
  }

  html.dark & input + div {
    background-color: var(--black-05);
  }
  html.dark & input:checked + div {
    background-color: var(--white-01);
    border: 1px solid var(--white);
  }
`;

type TProps = TClassValueProps & {
  name: string;
  src: string;
};
export const Checkout: FC<TProps> = ({
  name: itemName,
  src,
  classValue,
  ...props
}) => {
  const { form, items: allCartItems } =
    useCheckout();
  const cartItems = useMemo(
    () =>
      allCartItems.filter(
        (item) => item === src,
      ),
    [allCartItems.length, src],
  );
  const cartItemCount =
    cartItems.length;
  const isCartItems = cartItemCount > 0;
  const { onItemsAdd } = useCheckout();
  const handleSubmit =
    form.handleSubmit((...args) => {
      console.log(args);
    });

  const INPUTS = [
    ['size', SIZES],
    ['color', COLORS],
  ] as const;

  return (
    <motion.form
      className={clsx(
        'absolute bottom-16 right-14 column-end gap-4',
        classValue,
      )}
      layout
      onSubmit={handleSubmit}
      {...FADE_PRESENCE}
    >
      <input
        type='hidden'
        name='name'
        value={itemName}
      />
      {INPUTS.map(([name, items]) => (
        <div
          key={name}
          className='column-end gap-2 w-full p-px'
        >
          <ul className='row gap-px w-full'>
            {items.map((value) => (
              <li
                key={value}
                className='w-full'
              >
                <Label className='relative border-gray-1 cursor-pointer backdrop-blur-lg'>
                  <input
                    className='absolute inset-0 hidden'
                    {...form.register(
                      name,
                    )}
                    type='radio'
                    value={value}
                    title={`Select ${name}`}
                  />
                  <div className='w-full px-3 py-2 text-center'>
                    <samp>{value}</samp>
                  </div>
                </Label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Add
        key='add'
        cartItemCount={cartItemCount}
      />
    </motion.form>
  );
};
