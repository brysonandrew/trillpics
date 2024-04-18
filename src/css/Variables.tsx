import { COLOR_VARS_CSS } from '~/app/color';
import {
  Global,
  css,
} from '@emotion/react';

export const Variables = () => {
  return (
    <Global
      styles={css`
        :root {
          ${COLOR_VARS_CSS};
        }
      `}
    />
  );
};
