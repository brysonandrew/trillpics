import { type FC } from "react";
import { Notifications } from "@components/notifications";
import { Outlet } from "react-router";
import { withProviders } from "@shell/providers/withProviders";
import { Global } from "@shell/global";
import { FadeV } from "@brysonandrew/fade-edge/pairs/FadeV";
import { useVideoStore } from "@store/index";
import { Header } from "@/pages/home/header";
import { resolveGradient } from "@brysonandrew/color-gradient";

const C = () => {
  const { isPreviewOpen } =
    useVideoStore();
  return (
    <Global>
      <div
        className="fill"
        style={{
          backgroundImage:
            resolveGradient({
              name: "repeating-conic-gradient",
              parts: [
                "rgba(0,0,0,0)",
                "black",
              ],
            }),
          backgroundSize: "2px 2px",
        }}
      />
      <Outlet />
      {!isPreviewOpen && (
        <FadeV
          classValue="z-4x0"
          darkEdgeColor="var(--dark-04)"
          lightEdgeColor="var(--light-04)"
        />
      )}
      <Notifications />
    </Global>
  );
};
export const Shell: FC =
  withProviders(C);
