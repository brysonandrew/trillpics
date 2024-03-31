import { TBaseFieldValues } from '@components/form/config';
import { BAnchorSm } from '@brysonandrew/interactive'
import { EXTERNAL_LINK_ICON } from '@brysonandrew/icons-keys';
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
