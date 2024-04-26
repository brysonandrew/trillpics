import {
  FC,
  Fragment,
  PropsWithChildren,
} from "react";
import { useApp } from "@brysonandrew/app";
import { GlobalCss } from "~/shell/global/styles";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { Variables } from "~/css/Variables";
import { GradientsBluePinkYellow } from "~/components/gradients/blue-pink-yellow";
import { AURA } from "@brysonandrew/svg-filter";
import { BlurX } from "~/components/blur/x";
import { BlurY } from "~/components/blur/y";
import { Helmet } from "react-helmet-async";
import { Dark } from "~/shell/global/favicon/dark";
import { Light } from "~/shell/global/favicon/light";
//
export const Global: FC<
  PropsWithChildren
> = ({ children }) => {
  const { isDarkMode } = useDarkMode();
  const { PLACEHOLDER } = useApp();
  const PlaceholderClipPath =
    PLACEHOLDER?.GLOBAL.ClipPath ??
    Fragment;

  const Favicon = isDarkMode
    ? Dark
    : Light;

  return (
    <>
      {/* <MonoHead.Head
        pageValues={values}
        prefix={
          isDarkMode
            ? "/logo-dark.svg"
            : "/logo-light.svg"
        }
      /> */}
      {/* <Favicon
        url={
          isDarkMode
            ? "/logo-dark.svg"
            : "/logo-light.svg"
        }
      /> */}
      <Favicon />
      {/* <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="/dark/favicon.ico"
        />
      </Helmet> */}
      <Variables />
      <PlaceholderClipPath />
      <GradientsBluePinkYellow
        isDarkMode={isDarkMode}
      />
      <BlurX />
      <BlurY />
      <AURA.GLOBAL.Filter />
      <GlobalCss>{children}</GlobalCss>
    </>
  );
};
