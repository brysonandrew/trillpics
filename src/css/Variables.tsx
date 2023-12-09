import { COLOR_VARIABLES_CSS } from '@app/colors';
import { Global, css } from '@emotion/react';

export const Variables = () => {
  return (
    <Global
      styles={css`
        :root {
          ${COLOR_VARIABLES_CSS};
        }
      `}
    />
  );
};
