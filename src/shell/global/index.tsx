import {
  FC,
  PropsWithChildren,
} from "react";
import { GlobalCss } from "~/shell/global/styles";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { GradientsBluePinkYellow } from "~/components/gradients/blue-pink-yellow";
import { AURA } from "@brysonandrew/svg-filter";
import { BlurX } from "~/components/blur/x";
import { BlurY } from "~/components/blur/y";
import { Dark } from "~/shell/global/favicon/dark";
import { Light } from "~/shell/global/favicon/light";
//
export const Global: FC<
  PropsWithChildren
> = ({ children }) => {
  const { isDarkMode } = useDarkMode();

  const Favicon = isDarkMode
    ? Dark
    : Light;

  return (
    <>
      <Favicon />
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
