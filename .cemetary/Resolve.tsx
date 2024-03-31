import {
  FC,
  useEffect,
  useState,
} from 'react';
import { TChildren } from '@brysonandrew/config-types';
import { resolveErrorMessage } from '@utils/api/error/resolveErrorMessage';
import {
  TResolver,
  TSrc,
} from '@t/image';

type TProps = {
  resolver: TResolver;
  children(src: TSrc | null): TChildren;
};
export const Resolve: FC<TProps> = ({
  resolver,
  children,
}) => {
  const [src, setSrc] =
    useState<TSrc | null>(null);

  useEffect(() => {
    const resolve = async () => {
      try {
        const next = await resolver();
        if (
          typeof next === 'object' &&
          next !== null &&
          'default' in next
        ) {
          const value = next.default;

          if (
            typeof value === 'string'
          ) {
            setSrc(value);
          }
        }
      } catch (error) {
        resolveErrorMessage(error);
      }
    };
    resolve();
  }, []);

  return <>{children(src)}</>;
};
