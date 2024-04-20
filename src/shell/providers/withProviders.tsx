import { Providers } from '~/shell/providers';
import { FC } from 'react';

export function withProviders<T extends object>(I: FC<T>) {
  const C = (props: T) => {
    return (
      <Providers>
        <I {...props} />
      </Providers>
    );
  };
  return C;
}
