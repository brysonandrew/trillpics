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
import { useScreenMeasure } from "~/shell/init/measure";
import { ProvidersApi } from "~/shell/providers/api";

export const Shell = () => {
  const {
    screen,
    table,
    isControls,
    onReady,
  } = useInit();
  const { isDarkMode } = useDarkMode();
  const Favicon = isDarkMode
    ? Dark
    : Light;
  useScreenMeasure({
    onReady,
  });

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
        {screen.isDimensions && (
          <VirtualizeContextProvider
            screen={screen}
          >
            <ProvidersApi>
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
            </ProvidersApi>
          </VirtualizeContextProvider>
        )}
      </DarkModeProvider>
    </NetworkProvider>
  );
};
