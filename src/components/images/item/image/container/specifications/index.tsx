import { FC } from 'react';
import { TClassValueProps } from '@t/dom';
import { useCheckout } from '@context/checkout';
import { motion } from 'framer-motion';
import { Add } from './Add';
import clsx from 'clsx';
import { FADE_PRESENCE } from '@constants/animation';
import styled from '@emotion/styled';
import {
  TDisplay,
  TSpecifications,
} from '@t/image';
import { TPassedProps } from '../..';
import { TUseLocalStorageForm } from '@context/checkout/useLocalStorageForm';
import { INPUTS } from '@constants/images';

const Label = styled.label`
  html:not(.dark) & input + div {
    border: 1px solid var(--black-02);
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
    border: 1px solid var(--white-02);
    background-color: var(--black-05);
  }
  html.dark & input:checked + div {
    background-color: var(--white-01);
    border: 1px solid var(--white);
  }
`;

type TProps = TClassValueProps &
  TPassedProps &
  TDisplay & {
    onToggle(): void;
    form: TUseLocalStorageForm<TSpecifications>;
  };
export const Specifications: FC<
  TProps
> = ({
  name: itemName,
  src,
  classValue,
  onToggle,
  form,
  ...passedProps
}) => {
  const { onItemsAdd } = useCheckout();

  const handleSubmit =
    form.handleSubmit(
      ({ size, color }) => {
        const next = passedProps.isShop
          ? {
              name: itemName,
              src,
              color,
              size,
            }
          : passedProps.copies.map(
              (v) => ({
                ...v,
                size,
                color,
              }),
            );
        onItemsAdd(next);
        onToggle();
      },
    );

  return (
    <motion.form
      className={clsx(
        'absolute bottom-16 right-14 column-end gap-4 uppercase',
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
          <ul className='row gap-0.5 w-full'>
            {items.map((value) => (
              <li
                key={value}
                className='w-full'
              >
                <Label className='relative cursor-pointer backdrop-blur-lg'>
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
      <Add>
        {`${
          passedProps.isShop
            ? 'add to'
            : 'update'
        } cart`}
      </Add>
    </motion.form>
  );
};
