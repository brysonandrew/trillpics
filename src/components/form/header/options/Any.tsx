import { TBaseFieldValues } from '@components/form/config';
import { BSm } from '@components/interactive/BSm';
import { QUESTION_MARK_ICON } from '@constants/icons';
import { PathValue } from 'react-hook-form';
import { TProps } from '../config';

export const Any = <
  T extends TBaseFieldValues,
>({
  name,
  value,
  form,
}: TProps<T>) => {
  const isDisabled = value === '';
  return (
    <BSm
      classValue='text-teal-bright'
      shape='interactive-sq-sm'
      title='Use any value'
      icon={QUESTION_MARK_ICON}
      disabled={isDisabled}
      onClick={() => {
        if (isDisabled) return;
        form.setValue(
          name,
          '' as PathValue<
            T,
            typeof name
          >,
        );
      }}
    />
  );
};
