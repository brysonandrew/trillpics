import { TBaseFieldValues } from '@components/form/config';
import { BSm } from '@brysonandrew/interactive'
import { COPY_ICON } from '@brysonandrew/icons-keys';
import { useGallery } from '@pages/gallery/context';
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
  } = useGallery();
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
