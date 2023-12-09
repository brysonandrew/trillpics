import { resolveRegisterProps } from '@utils/form';
import { Select } from '../../select';
import {
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';
import { TFieldKey } from '../config';
import { Options } from '../../select/Options';
const MAX_DAYS = 31;

type TProps<T extends FieldValues> = {
  form: UseFormReturn<
    T,
    any,
    undefined
  >;
};
export const Days = <
  T extends FieldValues,
>({
  form,
}: TProps<T>) => {
  const register = form.register;

  return (
    <Select
      classValue='w-full sm:w-4/16'
      inputProps={resolveRegisterProps<T>(
        { title: 'Day', register },
      )}
    >
      <Options<string>
        items={[...Array(MAX_DAYS)].map(
          (_, index) => `${index + 1}`,
        )}
      />
    </Select>
  );
};
