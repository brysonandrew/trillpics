import type { FC } from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
  &.play-button .play {
    font-size: 18px;
    font-weight: 500;
  }
  &.play-button .play::before {
    content: '';
    position: absolute;
    height: 3px;
    width: 50px;
    top: 50%;
    transform: translateY(-50%);
    left: -58px;
    background: #000;
  }
  &.play-button i {
    height: 40px;
    width: 40px;
    border: 2px solid #000;
    line-height: 38px;
    text-align: center;
    margin-left: 10px;
    border-radius: 6px;
    cursor: pointer;
  }
`;

type TProps = any;

export const Play: FC<TProps> = () => {
  return (
    <Root>
      <div className='play-button'>
        <span className='play'>Play Video</span>
        <i className='fas fa-play'></i>
      </div>
    </Root>
  );
};
