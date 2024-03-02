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
import { Cart } from '@shell/header/item/cart';
import { Shop } from '@shell/header/item/shop';

type TProps = PropsWithChildren;
export const Header: FC<
  TProps
> = () => {
  const { pathname } = useLocation();
  const isHome =
    pathname === HOME_ROUTE;
  const { isDarkMode, darkKey } =
    useDarkMode();

  const rightItems = useMemo(() => {
    return {
      '/': [DarkMode, Cart],
      '/checkout': [DarkMode, Shop],
    }[pathname];
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
        <div className='row gap-4'>
          {isHome ? (
            <Title />
          ) : (
            <Link to={HOME_ROUTE}>
              <Title />
            </Link>
          )}
          <div className='mt-1 ml-2 uppercase text-xl tracking-wide'>
            <img
              className='h-6 sm:h-10'
              src={`/logo-${darkKey}.svg`}
              alt={`Logo ${darkKey}`}
            />
          </div>
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
