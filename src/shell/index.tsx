import { type FC } from "react";
import { Notifications } from "@components/notifications";
import { Outlet } from "react-router";
import { withProviders } from "@shell/providers/withProviders";
import { Global } from "@shell/global";
import { useApp } from "@brysonandrew/app";
import { FadeV } from "@brysonandrew/fade-edge/pairs/FadeV";
import { useVideoStore } from "@store/index";
import { Header } from "@shell/header";

const C = () => {
  const { isPreviewOpen } =
    useVideoStore();
  const { BackScreen } = useApp();

  return (
    <Global>
      <BackScreen />
      <Outlet />
      {!isPreviewOpen && (
        <FadeV
classValue='z-4x0'
          darkEdgeColor="var(--dark-04)"
          lightEdgeColor="var(--light-04)"
        />
      )}
      <Header />
      <Notifications />
    </Global>
  );
};
export const Shell: FC =
  withProviders(C);
