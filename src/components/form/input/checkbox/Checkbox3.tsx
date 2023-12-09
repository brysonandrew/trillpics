import styled from '@emotion/styled';
import clsx from 'clsx';
import { FC } from 'react';
import { TBaseProps } from '../../config';
import { TInputProps } from '@t/inputs';
import { TDivProps } from '@t/dom';
import { Icon } from '@iconify/react';

const ADD_KEY = 'square-outline';
const MINUS_KEY = 'checkbox-outline';

const Input = styled.input`
  & + label {
    & div.${MINUS_KEY} {
      display: none;
    }
    & div.${ADD_KEY} {
      display: flex;
    }
  }
  &:checked + label {
    & div.${ADD_KEY} {
      display: none;
    }
    & div.${MINUS_KEY} {
      display: flex;
    }
  }
`;

type TProps = TBaseProps<TInputProps> &
  TDivProps;
export const Checkbox3: FC<TProps> = ({
  classValue,
  inputProps,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'relative center h-full w-full',
        classValue,
      )}
      {...props}
    >
      <Input
        type='checkbox'
        className='cover opacity-0 cursor-pointer z-0'
        {...inputProps}
      />
      <label
        className={clsx(
          'column shrink-0 gap-2 relative pointer-events-none z-10',
        )}
      >
        {children}
        {[ADD_KEY, MINUS_KEY].map(
          (icon) => (
            <div
              key={icon}
              className={clsx(
                'center',
                icon,
              )}
            >
              <Icon
                className={clsx(
                  'w-8 h-8',
                  icon === MINUS_KEY
                    ? 'text-teal'
                    : 'text-white',
                )}
                icon={`ion:${icon}`}
              />
            </div>
          ),
        )}
      </label>
    </div>
  );
};
