import { FC } from 'react';
import { TClassValueProps } from '@t/dom';
import { useCheckout } from '@context/checkout';
import { motion } from 'framer-motion';
import { Add } from './Add';
import clsx from 'clsx';
import { FADE_PRESENCE } from '@constants/animation';
import styled from '@emotion/styled';
import { TItem } from '@context/checkout/config';
import {
  SIZES,
  COLORS,
  PENDING_DELIMITER,
} from '@constants/images';

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
  onToggle(): void;
};
export const Checkout: FC<TProps> = ({
  name: itemName,
  src,
  classValue,
  onToggle,
  ...props
}) => {
  const { form, onItemsAdd } =
    useCheckout();

  const handleSubmit =
    form.handleSubmit(
      ({ size, color }) => {
        const id = [
          itemName,
          color,
          size,
        ].join(
          PENDING_DELIMITER,
        ) as TItem['id'];
        onItemsAdd({
          id,
          name: itemName,
          src,
          color,
          size,
        });
        onToggle();
      },
    );

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
      <Add />
    </motion.form>
  );
};
