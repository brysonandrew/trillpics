import { TBaseFieldValues } from '@components/form/config';
import { BSm } from '@components/interactive/BSm';
import { COPY_ICON } from '@constants/icons';
import { useWorkshop } from '@pages/list/context';
import { resolveErrorMessage } from '@utils/api/error/resolveErrorMessage';
import { TProps } from '../config';

export const Copy = <
  T extends TBaseFieldValues,
>({
  title,
  value,
}: TProps<T>) => {
  const {
    clipboardContext: { handler },
  } = useWorkshop();
  return (
    <BSm
      shape='interactive-sq-sm'
      title={`Copy ${title} text to clipboard`}
      icon={COPY_ICON}
      onClick={async () => {
        try {
          handler({ title, value });
        } catch (error) {
          resolveErrorMessage(error);
        }
      }}
    />
  );
};
