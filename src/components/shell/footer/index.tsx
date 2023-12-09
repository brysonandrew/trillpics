import styled from '@emotion/styled';
import { useViewport as useViewportContext } from '@context/viewport';

const Root = styled.footer``;

export const Footer = () => {
  const viewport = useViewportContext();
  let width = 0;
  if (viewport.isDimensions) {
    width = viewport.width;
  }
  return (
    <Root
      className='fixed bottom-0 left-0 w-full h-0'
      style={{
        zIndex: width,
        transform: `translateZ(${width})`,
      }}
    ></Root>
  );
};

export default Footer;
