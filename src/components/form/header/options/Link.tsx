import { TBaseFieldValues } from '@components/form/config';
import { BAnchorSm } from '@components/interactive/BAnchorSm';
import { EXTERNAL_LINK_ICON } from '@constants/icons';
import { TProps } from '../config';

export const Link = <
  T extends TBaseFieldValues,
>({
  title,
  value,
}: TProps<T>) => {
  const href = '/';
  return (
    <BAnchorSm
      shape='interactive-sq-sm'
      title={`Open ${title}\n- ${href}`}
      href={href}
      icon={EXTERNAL_LINK_ICON}
    />
  );
};
