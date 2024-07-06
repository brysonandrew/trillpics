import { Hud } from "~/pics/hud";
import { Pics } from "~/pics";
import { Outlet } from "react-router";
import { ShellReady } from "~/shell/ready";
import { ShellGlobal } from "~/shell/global";
import { ShellInit } from "~/shell/init";
import { PathAnimation } from "~/components/charts/grid/step/path-animation";
import { MusicRefsProvider } from "~/pages/video/music/_context/refs";
import { MusicPlayProvider } from "~/pages/video/music/_context/ready";
import { MusicLoadProvider } from "~/pages/video/music/_context/load";

export const Shell = () => {
  return (
    <ShellGlobal>
      <ShellInit>
        {(screenInit) => (
          <ShellReady {...screenInit}>
            <MusicRefsProvider>
              <MusicPlayProvider>
                <MusicLoadProvider>
                  <Pics />
                  <Outlet />
                  <Hud />
                  <PathAnimation />
                </MusicLoadProvider>
              </MusicPlayProvider>
            </MusicRefsProvider>
          </ShellReady>
        )}
      </ShellInit>
    </ShellGlobal>
  );
};
