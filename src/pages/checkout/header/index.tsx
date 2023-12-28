import { DarkMode } from '@main/shell/header/dark-mode';
import { Header as _Header } from '@main/shell/header';
import { Shop } from '@main/shell/header/shop';

export const Header = () => {
  return (
    <_Header>
      <DarkMode />
      <Shop />
    </_Header>
  );
};
