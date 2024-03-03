import clsx from 'clsx';
import { useDarkMode } from '@brysonandrew/dark-mode';
import {
  FC,
  PropsWithChildren,
  useMemo,
} from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import { Title } from './Title';
import { HOME_ROUTE } from '@constants/routes';
import { DarkMode } from '@shell/header/item/dark-mode';

type TProps = PropsWithChildren;
export const Header: FC<
  TProps
> = () => {
  const { pathname } = useLocation();
  const isHome =
    pathname === HOME_ROUTE;
  const { isDarkMode } = useDarkMode();

  const rightItems = useMemo(() => {
    return [DarkMode];
    //RIGHT_MENU_RECORD[pathname];
  }, [pathname]);

  return (
    <header
      className={clsx(
        'sticky left-0 top-0 right-0 column w-full font-display z-60',
      )}
      style={{
        mixBlendMode: isDarkMode
          ? 'exclusion'
          : 'multiply',
      }}
    >
      <div
        className={clsx(
          'w-container column-end md:row-space',
        )}
      >
        <div>
          {isHome ? (
            <div className='row gap-4'>
              <Title />
            </div>
          ) : (
            <Link
              className='row gap-4'
              to={HOME_ROUTE}
            >
              <Title />
            </Link>
          )}
        </div>
        <div className='row shrink-0 lowercase overflow-hidden'>
          {rightItems?.map(
            (Item, index) => (
              <div
                key={`${index}`}
                className='relative w-14 h-14'
              >
                <Item />
              </div>
            ),
          )}
        </div>
      </div>
    </header>
  );
};
