import { TBaseFieldValues } from '@components/form/config';
import { BSm } from '@brysonandrew/interactive'
import { QUESTION_MARK_ICON } from '@brysonandrew/icons-keys';
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
      classValue='text-accent'
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
