import styled from '@emotion/styled';
import {
  HTMLAttributes,
  forwardRef,
  useContext,
  useRef,
} from 'react';
import { Context } from './Context';

const Root = styled.div``;
const List = styled.ul``;

export const Shell = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, ...rest }, ref) => {
  const { header, rowHeight } =
    useContext(Context);


  return (
    <Root {...rest} ref={ref}>
      {/* <div
        className='sticky top-0 z-20 bg-black-06 backdrop-blur-lg'
      >
        {header}
      </div> */}
      <List
        className='z-10'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </List>
    </Root>
  );
});

Shell.displayName = 'Shell';

export { Context };
