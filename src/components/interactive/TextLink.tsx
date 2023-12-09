import { TClassValueProps } from '@t/dom';
import clsx from 'clsx';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type TProps = LinkProps & TClassValueProps;
export const TextLink: FC<TProps> = ({ classValue, children, ...props }) => {
  return (
    <Link className={clsx('whitespace-nowrap text-light-blue', classValue)} {...props}>
      {children}
    </Link>
  );
};
