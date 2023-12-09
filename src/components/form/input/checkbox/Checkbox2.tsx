import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { TBaseProps } from '../../config';
import { TInputProps } from '@t/inputs';
import { TDivProps } from '@t/dom';
import { Icon } from '@iconify/react';

const ADD_KEY = 'add';
const MINUS_KEY = 'minus';

export const resolveCheckbox2Title = (
  title: string,
  isChecked?: boolean,
) =>
  `Turn ${
    isChecked ? 'OFF' : 'ON'
  } ${title}`;

const Input = styled.input`
  & + label {
    background-color: rgba(0, 0, 0, 0);
    backdrop-filter: blur(2px);
    & div.${MINUS_KEY} {
      display: none;
    }
    & div.${ADD_KEY} {
      display: flex;
    }
  }
  &:checked + label {
    backdrop-filter: blur(0px);
    & div.${ADD_KEY} {
      display: none;
    }
    & div.${MINUS_KEY} {
      display: flex;
    }
  }
`;

type TProps = TBaseProps<TInputProps> &
  TDivProps & { shortTitle: string };
export const Checkbox2: FC<TProps> = ({
  classValue,
  shortTitle,
  inputProps: {
    onChange,
    ...inputProps
  },
  ...props
}) => {
  return (
    <div
      className={clsx(
        'w-0 h-0',
        classValue,
      )}
      {...props}
    >
      <Input
        type='checkbox'
        className='cover opacity-0 cursor-pointer z-0'
        onChange={(event) => {
          if (!onChange) return;
          const input =
            event.currentTarget;

          if (input) {
            input.title =
              resolveCheckbox2Title(
                shortTitle,
                input.checked,
              );
          }

          onChange(event);
        }}
        {...inputProps}
      />
      <motion.label
        className={clsx(
          'absolute -inset-2 text-highlight rounded-md pointer-events-none z-50',
        )}
        variants={{
          animate: {
            backgroundColor:
              'rgba(255,255,255,0)',
          },
          hover: {
            backgroundColor:
              'rgba(255,255,255,0.1)',
          },
        }}
      >
        {[ADD_KEY, MINUS_KEY].map(
          (icon) => (
            <div
              key={icon}
              className={clsx(
                'center absolute w-6 h-6 left-1/2 top-2 -translate-x-1/2 opacity-0 rounded-full bg-black-04 group-hover:opacity-100',
                icon,
              )}
            >
              <Icon
                icon={`ion:${icon}`}
              />
            </div>
          ),
        )}
      </motion.label>
    </div>
  );
};
