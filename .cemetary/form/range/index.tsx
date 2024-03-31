import { resolveRegisterProps } from '@utils/form';
import {
  FieldValues,
  Path,
} from 'react-hook-form';
import { Input } from './Input';
import { TProps as _TProps } from './config';
import { Number as _Number } from './Number';
import { useBackgroundRangeColor } from './background-gradient/useBackgroundRangeColor';

type TProps<T extends FieldValues> =
  _TProps<T> & {
    name: Path<T> | any;
  };
export const Range = <
  T extends FieldValues,
>(
  props: TProps<T>,
) => {
  const {
    name,
    title,
    label,
    form,
    classValue,
    ...inputProps
  } = props;
  const { register, watch, setValue } =
    form;
  const value = watch(name);

  const min = Number(props.min);
  const max = Number(props.max);

  const backgroundImage =
    useBackgroundRangeColor({
      value,
      min,
      max,
    });

  return (
    <Input
      inputProps={{
        ...resolveRegisterProps<T>({
          title,
          register,
          name: name as Path<T>,
          options: {
            valueAsNumber: true,
          },
        }),
        style: { backgroundImage },
        label: (
          <div className='row w-full gap-4'>
            {label}
            <_Number<T>
              {...inputProps}
              name={name}
              form={form}
              min={min}
              max={max}
            />
          </div>
        ),
        ...inputProps,
      }}
      classValue={classValue}
    />
  );
};
