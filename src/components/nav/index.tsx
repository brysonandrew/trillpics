import styled from '@emotion/styled';
import { Menu } from './Menu';
const Root = styled.nav`
  &.navbar .menu {
    display: flex;
    flex-wrap: wrap;
  }
  &.navbar .logo a {
    text-decoration: none;
    font-size: 22px;
    color: #000;
    font-weight: 500;
  }
  &.navbar .menu li {
    list-style: none;
    margin: 0 6px;
  }
  &.navbar .menu a {
    color: #000;
    text-decoration: none;
    font-size: 17px;
    font-weight: 500;
    transition: all 0.3s ease;
  }
  &.navbar .menu a:hover {
    color: #f2f2f2;
  }
  &.navbar .buttons input {
    outline: none;
    color: #f2f2f2;
    font-size: 18px;
    font-weight: 500;
    border-radius: 12px;
    padding: 6px 15px;
    border: none;
    margin: 0 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    background-image: linear-gradient(135deg, #ff9a9e 10%, #f6416c 100%);
  }
  &.navbar .buttons input:hover {
    transform: scale(0.97);
  }
`;
export const Nav = () => {
  return (
    <Root className='navbar'>
      <div className='logo'>
        <a href='#'>LOGO</a>
      </div>
      <Menu />
      <div className='buttons'>
        <input type='button' value='Login' />
        <input type='button' value='Register' />
      </div>
    </Root>
  );
};
