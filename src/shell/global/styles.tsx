import { COLOR_VARS_CSS } from "~app/color";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { useBaseGlobalCss } from "@brysonandrew/css-base";
import { Global } from "@emotion/react";
import { FC } from "react";

export const GlobalCss: FC<
  TPropsWithChildren
> = ({ children }) => {
  const globalCss = useBaseGlobalCss({
    colorVars: `${COLOR_VARS_CSS}
    @keyframes spin {
      to {
        rotate: 360deg;
      }
    }`,
  });
  return (
    <>
      <Global styles={globalCss} />
      {children}
    </>
  );
};
