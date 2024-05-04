import { Outlet } from "react-router";
import { Header } from "~/shell/header";
import { Pics } from "~/pics";
import { Footer } from "~/shell/footer";
import { FooterLeft } from "~/shell/footer/left";
import { HeaderLeft } from "~/shell/header/left";
import { HeaderRight } from "~/shell/header/right";
import { Screen } from "~/shell/screen";
import { withProviders } from "~/shell/providers/with-providers";
import { TTableState } from "~/store/state/table/types";
import { useInit } from "~/shell/init";
import { AURA } from "@brysonandrew/svg-filter";
import { GradientsBluePinkYellow } from "~/components/gradients/blue-pink-yellow";
import { GlobalCss } from "~/shell/global/css";
import { useDarkMode } from "@brysonandrew/dark-mode";
import { BlurX } from "~/components/blur/x";
import { BlurY } from "~/components/blur/y";
import { Dark } from "~/shell/global/favicon/dark";
import { Light } from "~/shell/global/favicon/light";
import { TexturesMeshInset } from "~/components/textures/mesh/inset";
import {
  MOTION_BLUR_FILTER_X_PROPS,
  MOTION_BLUR_FILTER_Y_PROPS,
} from "~/components/blur/constants";

const OUTLET_CONTEXT = {
  Header,
  HeaderLeft,
  HeaderRight,
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
      <GlobalCss>
        <Favicon />
        <AURA.GLOBAL.Filter />
        <BlurX />
        <BlurY />
        <div
          style={{
            ...MOTION_BLUR_FILTER_X_PROPS,
          }}
        >
          <div
            style={{
              ...MOTION_BLUR_FILTER_Y_PROPS,
            }}
          >
            <GradientsBluePinkYellow
              isDarkMode={isDarkMode}
            />
            <TexturesMeshInset />
            <Outlet
              context={{
                ...OUTLET_CONTEXT,
              }}
            />
          </div>
        </div>
      </GlobalCss>
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
