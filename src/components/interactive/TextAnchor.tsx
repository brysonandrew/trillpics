import { TAnchorProps , TClassValueProps } from '@t/dom';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TAnchorProps & TClassValueProps;
export const TextAnchor: FC<TProps> = ({ classValue, children, ...props }) => {
  return (
    <a className={clsx('whitespace-nowrap text-light-blue', classValue)} {...props}>
      {children}
    </a>
  );
};
