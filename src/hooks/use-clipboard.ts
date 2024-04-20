import { useDelayCallback } from '~/hooks/window/useDelayCallback';
import { useState } from 'react';

type THandlerConfig = {
  title: string;
  value: any;
};
export type TCopying =
  | THandlerConfig
  | 'pending';

export const useClipboard =
  () => {
    const [copying, setCopying] =
      useState<TCopying | null>(null);

    const endCopying = () =>
      setCopying(null);

    const delayCopiedNull =
      useDelayCallback(
        endCopying,
        1200,
      );

    const handler = async ({
      title,
      value,
    }: THandlerConfig) => {
      setCopying('pending');

      if (typeof value === 'number') {
        value = value.toString();
      }

      if (typeof value === 'string') {
        await navigator.clipboard.writeText(
          value,
        );
      } else {
        console.log(
          'Not a string to clipboard ',
          value,
        );
        // await navigator.clipboard.write(
        //   value,
        // );
      }

      setCopying({ title, value });
      delayCopiedNull();
    };

    return {
      copying,
      handler,
      onEnd: endCopying,
    };
  };
export type TClipboard =
  ReturnType<
    typeof useClipboard
  >;
