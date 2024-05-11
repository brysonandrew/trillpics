import { Outlet } from "react-router";
import { Header } from "~/shell/header";
import { Footer } from "~/shell/footer";
import { FooterLeft } from "~/shell/footer/left";
import { HeaderLeft } from "~/shell/header/left";
import { HeaderRight } from "~/shell/header/right";
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
import {
  MOTION_BLUR_FILTER_X_PROPS,
  MOTION_BLUR_FILTER_Y_PROPS,
} from "~/shell/global/svg/filters/blur/constants";
import {
  SCROLLBAR_BORDER_WIDTH,
  SCROLLBAR_WIDTH,
} from "~uno/preflights";
import { GRADIENT_MESH_LIGHT } from "~app/color/gradient/mesh";
import { SvgFiltersFat } from "~/shell/global/svg/filters/fat";

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
            <div
              className="fill"
              style={{
                minHeight: "100vh",
                ...GRADIENT_MESH_LIGHT,

                backgroundSize:
                  "4px 4px",
              }}
            >
              <div
                className="fill inset-3"
                style={{
                  right: `calc(0.75rem + ${
                    SCROLLBAR_WIDTH +
                    SCROLLBAR_BORDER_WIDTH *
                      2
                  }px)`,
                  ...GRADIENT_MESH_LIGHT,

                  backgroundSize:
                    "4px 4px",
                  borderRadius: 4,
                }}
              >
                <img
                  className="w-full h-full opacity-10 grayscale-100 p-6"
                  src={`logo-${
                    isDarkMode
                      ? "dark"
                      : "light"
                  }.svg`}
                />
              </div>
            </div>

            <Outlet
              context={{
                ...OUTLET_CONTEXT,
              }}
            />
          </div>
        </div>
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
