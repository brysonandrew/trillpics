import { titleToKebab } from '@/utils/format';
import {
  Path,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

type TConfig<T extends FieldValues> = {
  title: string;
  register: UseFormRegister<T>;
  name?: Path<T>;
  options?: RegisterOptions<T>;
};
export const resolveRegisterProps = <
  T extends FieldValues,
>({
  title,
  register,
  name = titleToKebab(title) as Path<T>,
  options,
}: TConfig<T>) => {
  return {
    ...register(
      name as Path<T>,
      options,
    ),
    title,
  };
};
