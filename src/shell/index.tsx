import { Outlet } from "react-router";
import { withProviders } from "~/shell/providers/with-providers";
import { useInit } from "~/shell/init";
import { GradientsBluePinkYellow } from "~/shell/global/svg/gradients/blue-pink-yellow";
import { GlobalCss } from "~/shell/global/css";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { Dark } from "~/shell/global/favicon/dark";
import { Light } from "~/shell/global/favicon/light";
import { ShellBackground } from "~/shell/background";
import { BlurXyWrap } from "~/components/blur/xy";
import { Hud } from "~/pics/hud";
import { SvgFilters } from "~/shell/global/svg/filters";

export const Shell = withProviders(
  () => {
    const {
      screen,
      table,
      isControls,
    } = useInit();
    const { isDarkMode } =
      useDarkMode();

    const Favicon = isDarkMode
      ? Dark
      : Light;
    return (
      <>
        <Favicon />
        <GradientsBluePinkYellow
          isDarkMode={isDarkMode}
        />
        <GlobalCss />
        <SvgFilters />
        <BlurXyWrap> 
          <ShellBackground
            isDarkMode={isDarkMode}
          />
          <Outlet />
        </BlurXyWrap>
        {isControls &&
          screen.isDimensions && (
            <Hud
              dimensions={
                screen.container
              }
              isVerticalScroll={
                table.isVerticalScroll
              }
            />
          )}
      </>
    );
  }
);
