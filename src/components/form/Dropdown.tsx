import { Select } from '@components/form/select';
import { Options } from '@components/form/select/Options';
import { TSelectProps } from '@t/inputs';
import clsx from 'clsx';
import { TBaseProps } from './config';
import { TChildren } from '@t/index';

type TProps<T extends string | number> =
  TBaseProps<
    Omit<TSelectProps, 'form'>
  > & {
    items: readonly T[];
    children: TChildren;
  };
export const Dropdown = <
  T extends string | number,
>(
  props: TProps<T>,
) => {
  const {
    items,
    classValue,
    children,
    ...rest
  } = props;

  return (
    <Select
      title={rest.inputProps.title}
      classValue={clsx(
        'w-full',
        classValue,
      )}
      placeholder='Any'
      {...rest}
    >
      {children}
      <Options<T> items={items} />
    </Select>
  );
};
