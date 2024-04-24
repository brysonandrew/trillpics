import { type FC } from "react";
import { Notifications } from "~/components/notifications";
import { Outlet } from "react-router";
import { withProviders } from "~/shell/providers/withProviders";
import { Global } from "~/shell/global";
import { DecorationNet } from "~/components/decoration/background/net";
import { Header } from "~/shell/header";
import { List } from "~/shell/pics";
import { BlurXy } from "~/components/blur/xy";
import { Footer } from "~/shell/footer";
import { FooterLeft } from "~/shell/footer/left";
import { useOnscreenRef } from "~/shell/header/right/zen-mode/use-idle";
import { HeaderLeft } from "~/shell/header/left";
import { HeaderRight } from "~/shell/header/right";
import { Screen } from "~/shell/screen";
import { FadeV } from "@brysonandrew/fade-edge";

const OUTLET_CONTEXT = {
  Header,
  HeaderLeft,
  HeaderRight,
  Screen,
  Footer,
  FooterLeft,
} as const;
export type TOutletContext =
  typeof OUTLET_CONTEXT;
const C = () => {
  useOnscreenRef();
  return (
    <Global>
      <DecorationNet />
      <BlurXy/>
      <List />
      <FadeV
        classValue="z-0"
        darkEdgeColor="var(--dark-06)"
        lightEdgeColor="var(--light-02)"
      />
      <Outlet
        context={OUTLET_CONTEXT}
      />
      <Notifications />
    </Global>
  );
};
export const Shell: FC =
  withProviders(C);
