import { B } from '@components/interactive/B';
import {
  FieldValues,
  FormState,
  UseFormReset,
} from 'react-hook-form';
import { TButtonProps } from '@t/dom';
import { I } from '@components/Icon';
import {
  ERROR_ICON,
  GENERATE_IMAGE_ICON,
} from '@constants/icons';
import clsx from 'clsx';

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
        classValue='text-red'
        onClick={() => reset()}
        disabled={!formState.isDirty}
      >
        Reset
      </B>
      <B
        type='submit'
        classValue={clsx('row gap-2 text-blue')}
        disabled={
          props.disabled || isErrors
        }
      >
        {isErrors ? (
          <I icon={ERROR_ICON} />
        ) : (
          <I icon={GENERATE_IMAGE_ICON} />
        )}
        <div>Generate</div>
      </B>
    </footer>
  );
};
