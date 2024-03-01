import { DarkMode } from 'src/shell/header/dark-mode';
import { Cart } from 'src/shell/header/cart';
import { Header as _Header } from 'src/shell/header';

export const Header = () => {
  return (
    <_Header>
      <DarkMode />
      <Cart />
    </_Header>
  );
};
 