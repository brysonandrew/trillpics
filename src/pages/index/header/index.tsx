import { DarkMode } from '@main/shell/header/dark-mode';
import { Cart } from '@main/shell/header/cart';
import { Header as _Header } from '@main/shell/header';

export const Header = () => {
  return (
    <_Header>
      <DarkMode />
      <Cart />
    </_Header>
  );
};
 