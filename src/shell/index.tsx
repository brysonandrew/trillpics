import { type FC } from "react";
import { Notifications } from "@components/notifications";
import { Outlet } from "react-router";
import { withProviders } from "@shell/providers/withProviders";
import { Global } from "@shell/global";
import { FadeV } from "@brysonandrew/fade-edge/pairs/FadeV";
import { useVideoStore } from "@store/index";
import { Header } from "@shell/header";

const C = () => {
  const { isPreviewOpen } =
    useVideoStore();
  return (
    <Global>
      <Outlet />
      {!isPreviewOpen && (
        <FadeV
          classValue="z-4x0"
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
