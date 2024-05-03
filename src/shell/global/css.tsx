import { FC } from "react";
import { COLOR_VARS_CSS } from "~app/color";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { Global } from "@emotion/react";

export const GlobalCss: FC<
  TPropsWithChildren
> = ({ children }) => {
  const globalCss = `${COLOR_VARS_CSS}
    @keyframes spin {
      to {
        rotate: 360deg;
      }
    }`;
  return (
    <>
      <Global styles={globalCss} />
      {children}
    </>
  );
};
