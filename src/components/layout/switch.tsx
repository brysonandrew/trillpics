import {Fragment, type FC} from 'react';

type TProps = {expression: string, children(key:string): JSX.Element|null};
export const LayoutSwitch: FC<TProps> = ({expression, children}) => {
  return (
    <Fragment>
      {children(expression)}
    </Fragment>
  );
};
