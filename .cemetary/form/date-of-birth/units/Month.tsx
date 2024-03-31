import { resolveRegisterProps } from '@utils/form';
import { Select } from '../../select';
import {
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';
import { MONTHS, TMonthKey } from '../config';
import { Options } from '../../select/Options';

type TProps<T extends FieldValues> = {
  form: UseFormReturn<
    T,
    any,
    FieldValues
  >;
};
export const Month = <
  T extends FieldValues,
>({
  form,
}: TProps<T>) => {
  const register = form.register;
  return (
    <Select
      classValue='w-full sm:w-7/16'
      inputProps={resolveRegisterProps<T>(
        { title: 'Month', register },
      )}
    >
      <Options<TMonthKey>
        items={MONTHS}
      />
    </Select>
  );
};
