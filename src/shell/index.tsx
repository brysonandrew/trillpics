import { Outlet } from "react-router";
import { Footer } from "~/shell/footer";
import { FooterLeft } from "~/shell/footer/left";
import { Screen } from "~/shell/screen";
import { withProviders } from "~/shell/providers/with-providers";
import { TTableState } from "~/store/state/table/types";
import { useInit } from "~/shell/init";
import { AURA } from "@brysonandrew/svg-filter";
import { GradientsBluePinkYellow } from "~/shell/global/svg/gradients/blue-pink-yellow";
import { GlobalCss } from "~/shell/global/css";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { BlurX } from "~/shell/global/svg/filters/blur/x";
import { BlurY } from "~/shell/global/svg/filters/blur/y";
import { Dark } from "~/shell/global/favicon/dark";
import { Light } from "~/shell/global/favicon/light";
import { SvgFiltersFat } from "~/shell/global/svg/filters/fat";
import { ShellBackground } from "~/shell/background";
import { BlurXyWrap } from "~/components/blur/xy";
import { PicsHeaderScrollTop } from "~/pics/header/scroll-top";

const OUTLET_CONTEXT = {
  PicsHeaderScrollTop,
  Screen,
  Footer,
  FooterLeft,
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
      <>
        <Favicon />
        <AURA.GLOBAL.Filter />
        <BlurX />
        <BlurY />
        <GradientsBluePinkYellow
          isDarkMode={isDarkMode}
        />
        <GlobalCss />
        <SvgFiltersFat />
        <BlurXyWrap>
          <ShellBackground
            isDarkMode={isDarkMode}
          />
          <Outlet
            context={{
              ...OUTLET_CONTEXT,
            }}
          />
        </BlurXyWrap>
      </>
    );
  }
);
{
  /* <GradientsZebraBackground/> */
}
{
  /* <Mesh materialColor="#000" gapShade="rgba(0,0,0,0.5)" classValue='opacity-50'/> */
}
{
  /* <Root className="fill"/> */
}
{
  /* <TexturesMesh opacityClassValue="opacity-100" /> */
}
{
  /* <FadeV
          darkEdgeColor="var(--dark-02)"
          lightEdgeColor="var(--light-02)"
        /> */
}
