import { B } from '@brysonandrew/interactive';
import {
  FieldValues,
  FormState,
  UseFormReset,
} from 'react-hook-form';
import { TButtonProps } from '@brysonandrew/config-types';
import { I } from '@components/Icon';
import { ERROR_ICON } from '@brysonandrew/icons-keys';
import clsx from 'clsx';
import { GENERATE_IMAGE_ICON } from '@constants/icons';

export type TProps<
  T extends FieldValues,
> = TButtonProps & {
  formState: FormState<T>;
  reset: UseFormReset<T>;
};
export const Footer = <
  T extends FieldValues,
>({
  formState,
  reset,
  classValue,
  ...props
}: TProps<T>) => {
  const isErrors =
    Object.keys(formState.errors)
      .length > 0;
  return (
    <footer
      className={clsx(
        'row-space p-4 gap-4',
        classValue,
      )}
    >
      <B
        title='Reset'
        classValue='text-red'
        onClick={() => reset()}
        disabled={!formState.isDirty}
      >
        Reset
      </B>
      <B
        title='Generate'
        type='submit'
        classValue={clsx(
          'row gap-2 text-blue',
        )}
        disabled={
          props.disabled || isErrors
        }
      >
        {isErrors ? (
          <I icon={ERROR_ICON} />
        ) : (
          <I
            icon={GENERATE_IMAGE_ICON}
          />
        )}
        <div>Generate</div>
      </B>
    </footer>
  );
};
