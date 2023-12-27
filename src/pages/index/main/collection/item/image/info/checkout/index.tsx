import { FC, useMemo } from 'react';
import { TClassValueProps } from '@t/dom';
import { useCheckout } from '@context/checkout';
import { motion } from 'framer-motion';
import { Add } from './Add';
import clsx from 'clsx';
import { FADE_PRESENCE } from '@constants/animation';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import {
  DEFAULT_VALUES,
  SIZES,
  COLORS,
} from '@context/checkout/config';

const Label = styled.label`
  & input + div {
    background-color: white;
    color: black;
  }
  & input:checked + div {
    background-color: black;
    color: white;
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
  const form = useForm({
    defaultValues: DEFAULT_VALUES,
  });
  const { items: allCartItems } =
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
        'column-end gap-4 cursor-default bg-red hover:bg-blue',
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
          className='column-end gap-2 w-full'
        >
          <kbd>{name}</kbd>
          <ul className='row gap-2 w-full'>
            {items.map((value) => (
              <li
                key={value}
                className='w-full'
              >
                <Label className='relative border-gray-1 cursor-pointer'>
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
                    {value}
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
