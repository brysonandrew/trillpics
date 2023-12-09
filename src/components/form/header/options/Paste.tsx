import { TBaseFieldValues } from '@components/form/config';
import { BSm } from '@components/interactive/BSm';
import { PASTE_ICON } from '@constants/icons';
import { PathValue } from 'react-hook-form';
import { TProps } from '../config';

export const Paste = <
  T extends TBaseFieldValues,
>({
  name,
  form,
  valueResolver,
}: TProps<T>) => {
  return (
    <BSm
      shape='interactive-sq-sm'
      title='Paste clipboard to text'
      icon={PASTE_ICON}
      onClick={async () => {
        const clipboard =
          await navigator.clipboard.readText();
        const next =
          valueResolver?.(clipboard) ??
          clipboard;
        form.setValue(
          name,
          next as PathValue<
            T,
            typeof name
          >,
        );
      }}
    />
  );
};
