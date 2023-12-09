import { resolveRegisterProps } from '@utils/form';
import { Select } from '../../select';
import {
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';
import { Options } from '../../select/Options';
import { useCurrentYear } from '@hooks/date/useCurrentYear';

const MIN = 1900;

type TProps<T extends FieldValues> = {
  form: UseFormReturn<
    T,
    any,
    undefined
  >;
};
export const Years = <
  T extends FieldValues,
>({
  form,
}: TProps<T>) => {
  const register = form.register;
  const max = useCurrentYear();

  return (
    <Select
      classValue='w-full sm:w-5/16'
      inputProps={resolveRegisterProps<T>(
        {
          title: 'Year',
          register,
        },
      )}
    >
      <Options<string>
        items={[
          ...Array(max - MIN + 1),
        ].map((_, index) => {
          const value = max - index;
          return `${value}`;
        })}
      />
    </Select>
  );
};
