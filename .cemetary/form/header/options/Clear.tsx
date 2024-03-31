import { BSm } from '@brysonandrew/interactive'
import { CROSS_ICON } from '@brysonandrew/icons-keys';
import {
  Path,
  PathValue,
} from 'react-hook-form';
import { useTimeoutRef } from '@hooks/window/useTimeoutRef';
import { TProps } from '../config';
import { TBaseFieldValues } from '@components/form/config';

const resolveEmptyValue = (
  value: any,
) => {
  if (typeof value === 'string') {
    return '';
  }
  if (Array.isArray(value)) {
    return [];
  }
  return null;
};

export const Clear = <
  T extends TBaseFieldValues,
>({
  name,
  form,
}: TProps<T>) => {
  const { timeoutRef } =
    useTimeoutRef();

  return (
    <BSm
      shape='interactive-sq-sm'
      title='Clear text'
      icon={CROSS_ICON}
      onClick={() => {
        timeoutRef.current = setTimeout(
          () => {
            const emptyValue =
              resolveEmptyValue(
                form.getValues(name),
              );
            typeof form.setValue(
              name,
              emptyValue as PathValue<
                T,
                Path<T>
              >,
            );
          },
          0,
        );
      }}
    />
  );
};
