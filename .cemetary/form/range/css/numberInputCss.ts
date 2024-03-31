import { css } from '@emotion/react';
import { PRIMARY } from './inputCss';

export const numberInputCss = css`
  input[type='number'] {
    width: 50px;
    height: 30px;
    border: none;
    background-color: ${PRIMARY};
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    opacity: 1;
  }
`;
