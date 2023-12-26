import {
  FC,
  useEffect,
  useState,
} from 'react';
import { TChildren } from '@t/index';
import { resolveErrorMessage } from '@utils/api/error/resolveErrorMessage';

type TProps = {
  resolver(): Promise<unknown>;
  children(src: string): TChildren;
};
export const ResolveSrc: FC<TProps> = ({
  resolver,
  children,
}) => {
  const [src, setSrc] = useState<
    string | null
  >(null);

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
            const blob = await fetch(
              value,
            ).then((r) => r.blob());

            const file = new File(
              [blob],
              value,
              {
                 type: 'image/png',
              },
            );

            console.log(file);

            setSrc(value);
          }
        }
      } catch (error) {
        resolveErrorMessage(error);
      }
    };
    resolve();
  }, []);

  if (src === null) return null;
  return <>{children(src)}</>;
};
