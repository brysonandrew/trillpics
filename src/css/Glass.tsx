import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TDivProps } from '@t/dom';
import { FC } from 'react';

export const glassBlackCss = css`
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid
    rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;

export const glassCss = css`
  background: rgba(211, 211, 211, 0.1);
  border-top: 1px solid
    rgba(255, 255, 255, 0.2);
  border-left: 1px solid
    rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;

const Panel = styled.div`
  border-radius: 25px;
  box-shadow: 0 20px 50px
    rgba(0, 0, 0, 0.15);
  ${glassBlackCss}
`;

type TProps = TDivProps;
export const Glass: FC<TProps> = ({
  children,
}) => {
  return <Panel>{children}</Panel>;
};
