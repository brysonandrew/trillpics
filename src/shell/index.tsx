import { Outlet } from "react-router";
import { Header } from "~/shell/header";
import { Pics } from "~/shell/pics";
import { Footer } from "~/shell/footer";
import { FooterLeft } from "~/shell/footer/left";
import { HeaderLeft } from "~/shell/header/left";
import { HeaderRight } from "~/shell/header/right";
import { Screen } from "~/shell/screen";
import { FadeV } from "@brysonandrew/fade-edge";
import { withProviders } from "~/shell/providers/with-providers";
import { TTableState } from "~/store/state/table/types";
import { Outer } from "~/shell/pics/virtualize/outer";
import { useInit } from "~/shell/init";
import { AURA } from "@brysonandrew/svg-filter";
import { GradientsBluePinkYellow } from "~/components/gradients/blue-pink-yellow";
import { GlobalCss } from "~/shell/global/styles";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { BlurX } from "~/components/blur/x";
import { BlurY } from "~/components/blur/y";
import { Dark } from "~/shell/global/favicon/dark";
import { Light } from "~/shell/global/favicon/light";

const OUTLET_CONTEXT = {
  Header,
  HeaderLeft,
  HeaderRight,
  Screen,
  Footer,
  FooterLeft,
  Pics,
} as const;
export type TOutletContext =
  typeof OUTLET_CONTEXT & {
    picsTable: TTableState;
  };
export const Shell = withProviders(
  () => {
    useInit();
    const { isDarkMode } =
      useDarkMode();

    const Favicon = isDarkMode
      ? Dark
      : Light;

    return (
      <GlobalCss>
        <Favicon />
        <GradientsBluePinkYellow
          isDarkMode={isDarkMode}
        />
        <AURA.GLOBAL.Filter />
        <BlurX />
        <BlurY />
        {/* <TexturesMesh opacityClassValue="opacity-100" /> */}
        <FadeV
          darkEdgeColor="var(--dark-02)"
          lightEdgeColor="var(--light-02)"
        />
        <Pics />
        <Header>
          <HeaderLeft />
        </Header>
        <Outlet
          context={{
            Header,
            HeaderLeft,
            HeaderRight,
            Screen,
            Footer,
            FooterLeft,
            Pics,
          }}
        />
      </GlobalCss>
    );
  }
);
