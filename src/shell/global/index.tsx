import {
  FC,
  Fragment,
  PropsWithChildren,
} from "react";
import Favicon from "react-favicon";
import { useApp } from "@brysonandrew/app";
import { GlobalCss } from "~/shell/global/styles";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { Helmet } from "react-helmet-async";
import { Variables } from "~/css/Variables";
import { GradientsBluePinkYellow } from "~/components/gradients/blue-pink-yellow";
import { AURA } from "@brysonandrew/svg-filter";
import { BlurX } from "~/components/blur/x";
import { BlurY } from "~/components/blur/y";

export const Global: FC<
  PropsWithChildren
> = ({ children }) => {
  const { isDarkMode } = useDarkMode();
  const { PLACEHOLDER } = useApp();
  const PlaceholderClipPath =
    PLACEHOLDER?.GLOBAL.ClipPath ??
    Fragment;

  return (
    <>
      <Favicon
        url={
          isDarkMode
            ? "/logo-dark.svg"
            : "/logo-light.svg"
        }
      />
      <Helmet>
        <title>ᴛʀɪʟʟ ᴘɪᴄs</title>
      </Helmet>
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
