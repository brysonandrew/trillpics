import { DarkMode } from 'src/shell/header/dark-mode';
import { Header as _Header } from 'src/shell/header';
import { Shop } from 'src/shell/header/shop';

export const Header = () => {
  return (
    <_Header>
      <DarkMode />
      <Shop />
    </_Header>
  );
};
