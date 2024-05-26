import { Outlet } from "react-router";
import { useInit } from "~/shell/init";
import { GradientsBluePinkYellow } from "~/shell/global/svg/gradients/blue-pink-yellow";
import { GlobalCss } from "~/shell/global/css";
import {
  DarkModeProvider,
  useDarkMode,
} from "@brysonandrew/dark-mode";
import { Dark } from "~/shell/global/favicon/dark";
import { Light } from "~/shell/global/favicon/light";
import { ShellBackground } from "~/shell/background";
import { BlurXyWrap } from "~/components/blur/xy";
import { Hud } from "~/pics/hud";
import { SvgFilters } from "~/shell/global/svg/filters";
import { NetworkProvider } from "@brysonandrew/network";
import { VirtualizeContextProvider } from "~/context";

export const Shell = () => {
  const { screen, table, isControls } =
    useInit();
  const { isDarkMode } = useDarkMode();
  const Favicon = isDarkMode
    ? Dark
    : Light;
  if (!screen.isDimensions) return null;

  return (
    <NetworkProvider>
      <DarkModeProvider>
        <Favicon />
        <GradientsBluePinkYellow
          isDarkMode={isDarkMode}
        />
        <GlobalCss />
        <ShellBackground
          isDarkMode={isDarkMode}
        />
        <VirtualizeContextProvider
          screen={screen}
        >
          <>
            <SvgFilters />

            <BlurXyWrap>
              <Outlet />
            </BlurXyWrap>
            {isControls && (
              <Hud
                container={
                  screen.container
                }
                isVerticalScroll={
                  table.isVerticalScroll
                }
              />
            )}
          </>
        </VirtualizeContextProvider>
      </DarkModeProvider>
    </NetworkProvider>
  
);
};
