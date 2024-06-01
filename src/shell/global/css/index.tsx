import { FC } from "react";
import { COLOR_VARS_CSS } from "~uno/color";
import {
  css,
  Global,
} from "@emotion/react";

export const ShellGlobalCss: FC =
  () => {
    const shellGlobalCss = css`
      :root {
        ${COLOR_VARS_CSS};
      }
      @keyframes spin {
        to {
          rotate: 360deg;
        }
      }
    `;
    return (
      <Global styles={shellGlobalCss} />
    );
  };
