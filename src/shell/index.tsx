import { type FC } from "react";
import { Notifications } from "@components/notifications";
import { Outlet } from "react-router";
import { withProviders } from "@shell/providers/withProviders";
import { Global } from "@shell/global";
import { Header } from "@shell/header";
import { useApp } from "@brysonandrew/app";
import { FadeV } from "@brysonandrew/fade-edge/pairs/FadeV";
import { Footer } from "@pages/home/footer";

const C = () => {
  const { BackScreen } = useApp();

  return (
    <Global>
      <BackScreen />
      <Header />
      <Outlet />
      <FadeV

        darkEdgeColor="var(--dark-04)"
        lightEdgeColor="var(--light-04)"
      />
      <Footer />
      <Notifications />
    </Global>
  );
};
export const Shell: FC =
  withProviders(C);
