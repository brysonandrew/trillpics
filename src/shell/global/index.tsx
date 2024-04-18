import {
  FC,
  Fragment,
  PropsWithChildren,
} from "react";
import Favicon from "react-favicon";
import { useApp } from "@brysonandrew/app";
import { GlobalCss } from "@/shell/global/styles";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { Helmet } from "react-helmet-async";
import { Variables } from "@/css/Variables";
import { LinearGradientBluePinkYellowSvg } from "@/components/gradients/linear-gradient-svg";
import { AURA } from "@brysonandrew/svg-filter";

export const Global: FC<
  PropsWithChildren
> = ({ children }) => {
  const { isDarkMode } = useDarkMode();
  const { PLACEHOLDER } = useApp();
  const PlaceholderClipPath =
    PLACEHOLDER?.GLOBAL.ClipPath ??
    Fragment;
  // const pageValues = Object.values(
  //   PAGE_RECORDS.record,
  // );

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
      <LinearGradientBluePinkYellowSvg
        isDarkMode={isDarkMode}
      />
      <AURA.GLOBAL.Filter />
      <GlobalCss>{children}</GlobalCss>
    </>
  );
};
