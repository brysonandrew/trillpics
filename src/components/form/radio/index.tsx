import { resolveRegisterProps } from '@utils/form';
import {
  FieldValues,
  Path,
  UseFormReturn,
} from 'react-hook-form';
import { Input } from './Input';
import { TInputProps } from '@t/inputs';

type TProps<T extends FieldValues> =
  Pick<
    TInputProps,
    | 'classValue'
    | 'min'
    | 'max'
    | 'step'
    | 'value'
  > & {
    form: UseFormReturn<T>;
    name: Path<T>;
    title: string;
  };

export const Radio = <
  K extends string,
  T extends FieldValues,
>({
  name,
  title,
  form: { watch, register },
  classValue,
  ...props
}: TProps<T>) => {
  return (
    <Input
      inputProps={{
        ...resolveRegisterProps<T>({
          title,
          register,
          name: name as any,
        }),
        ...props,
      }}
      classValue={classValue}
    />
  );
};
