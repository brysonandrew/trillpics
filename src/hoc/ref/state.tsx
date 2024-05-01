import { FC, Dispatch, SetStateAction, useState } from 'react';

export type TRefState<E extends HTMLElement> = [
  E | null,
  Dispatch<SetStateAction<E | null>>
];
export const withRefState = <T extends HTMLElement, P extends object>(
  I: FC<P>
) => {
  const C = (props: P) => {
    const ref = useState<T | null>(null);

    return <I ref={ref} {...props} />;
  };
  return C;
};
