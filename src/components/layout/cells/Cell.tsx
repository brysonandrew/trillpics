import type { FC } from 'react';
import { TDivProps , TClassValueProps } from '@brysonandrew/config-types';
import clsx, { ClassValue } from 'clsx';
import {
  Background,
  TProps as TBackgroundProps,
} from './Background';

type TProps = Omit<
  TDivProps,
  'children'
> &
  TBackgroundProps &
  TDivProps &
  TClassValueProps & {
    childrenClassValue?: ClassValue;
  };
export const Cell: FC<TProps> = ({
  classValue,
  childrenClassValue,
  children,
  insetClassValue,
  colorClassValue,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'relative w-full h-full',
        classValue,
      )}
      {...props}
    >
      <Background
        insetClassValue={
          insetClassValue
        }
        colorClassValue={
          colorClassValue
        }
      />
      <div
        className={clsx(
          'relative column-start w-full',
          childrenClassValue,
        )}
      >
        {children}
      </div>
    </div>
  );
};
