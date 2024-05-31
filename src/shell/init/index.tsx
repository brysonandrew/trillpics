import { FC } from "react";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { Dark } from "~/shell/global/favicon/dark";
import { Light } from "~/shell/global/favicon/light";
import { GradientsBluePinkYellow } from "~/shell/init/svg/gradients/blue-pink-yellow";
import { useInit } from "~/shell/init/hooks";
import {
  TScreen,
  useScreenMeasure,
} from "~/shell/init/hooks/measure/measure";
import { InitContextProvider } from "~/shell/init/context";
import { SvgFilters } from "~/shell/init/svg/filters";
import { ShellGlobalBackground } from "~/shell/global/background";

type TProps = {
  children(screen: TScreen): void;
};
export const ShellInit: FC<TProps> = ({
  children,
}) => {
  const { screen, onReady } = useInit();
  useScreenMeasure({
    onReady,
  });

  const { isDarkMode } = useDarkMode();
  const Favicon = isDarkMode
    ? Dark
    : Light;

  return (
    <InitContextProvider
      screen={screen}
    >
      <>
        <Favicon />
        <SvgFilters />
        <GradientsBluePinkYellow
          isDarkMode={isDarkMode}
        />
        {children(screen)}
      </>
    </InitContextProvider>
  );
};
