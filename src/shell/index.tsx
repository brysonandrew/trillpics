import { Notifications } from "~/components/notifications";
import { Outlet } from "react-router";
import { Global } from "~/shell/global";
import { DecorationNet } from "~/components/decoration/background/net";
import { Header } from "~/shell/header";
import { Pics } from "~/shell/pics";
import { BlurXy } from "~/components/blur/xy";
import { Footer } from "~/shell/footer";
import { FooterLeft } from "~/shell/footer/left";
import { HeaderLeft } from "~/shell/header/left";
import { HeaderRight } from "~/shell/header/right";
import { Screen } from "~/shell/screen";
import { FadeV } from "@brysonandrew/fade-edge";
import { withProviders } from "~/shell/providers/with-providers";
import { TTableState } from "~/store/slices/table/types";
import { Outer } from "~/shell/outer";
import { useInit } from "~/shell/init";

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
    return (
      <Global>
        <DecorationNet opacityClassValue="opacity-100" />
        <FadeV
          classValue="z-0"
          darkEdgeColor="var(--dark-02)"
          lightEdgeColor="var(--light-02)"
        />
        <Pics
          outerElementType={Outer}
        />
        <Outlet
          context={{
            ...OUTLET_CONTEXT,
          }}
        />
        <Notifications />
      </Global>
    );
  }
);
