import { type FC } from 'react';
import {
  Button,
  TProps as TButtonProps,
} from './shell/Button';
import { WithPadding as Header } from '@components/form/header/shell/WithPadding';
import { P1 } from '@components/layout/space/P1';
import { TButtonMotionProps } from '@t/dom';

type TProps = TButtonMotionProps & {
  title: string;
  buttons: TButtonProps[];
};
export const HeaderMenu: FC<TProps> = ({
  title,
  buttons,
}) => (
  <Header
    left={title}
    right={
      <ul className='row-end'>
        {buttons.map(
          (buttonProps, index) => (
            <li key={buttonProps.title}>
              {index !== 0 && <P1 />}
              <Button
                {...buttonProps}
              />
            </li>
          ),
        )}
      </ul>
    }
  />
);
