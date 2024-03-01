import {
  FC,
  Fragment,
  PropsWithChildren,
} from 'react';
import { Head } from '@brysonandrew/dark-mode';
import { useApp } from '@brysonandrew/app';
import { GlobalCss } from '@shell/global/Css';
import { PAGE_RECORDS } from '@config/routes';
import { TPageTitle } from '@config/routes/config/types';

export const Global: FC<
  PropsWithChildren
> = ({ children }) => {
  const { PLACEHOLDER } = useApp();
  const PlaceholderClipPath =
    PLACEHOLDER?.GLOBAL.ClipPath ??
    Fragment;
  const pageValues = Object.values(
    PAGE_RECORDS.record,
  );

  return (
    <>
      <Head<TPageTitle>
        pageValues={pageValues}
      />
      <PlaceholderClipPath />
      <GlobalCss>{children}</GlobalCss>
    </>
  );
};
