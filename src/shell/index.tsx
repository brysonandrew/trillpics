import { type FC } from "react";
import { Notifications } from "~/components/notifications";
import { Outlet } from "react-router";
import { withProviders } from "~/shell/providers/withProviders";
import { Global } from "~/shell/global";
import { FadeV } from "@brysonandrew/fade-edge/pairs/FadeV";
import { useVideoStore } from "~/store/index";
import { DecorationNet } from "~/components/decoration/background/net";

const C = () => {
  const { isPlayerOpen } =
    useVideoStore();
  return (
    <Global>
      <DecorationNet />
      <Outlet />
      {!isPlayerOpen && (
        <FadeV
          classValue="z-40"
          darkEdgeColor="var(--dark-06)"
          lightEdgeColor="var(--light-02)"
        />
      )}
      <Notifications />
    </Global>
  );
};
export const Shell: FC =
  withProviders(C);
