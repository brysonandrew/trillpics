import { Hud } from "~/pics/hud";
import { Pics } from "~/pics";
import { Outlet } from "react-router";
import { ShellReady } from "~/shell/ready";
import { ShellGlobal } from "~/shell/global";
import { ShellInit } from "~/shell/init";
import { PathAnimation } from "~/components/charts/grid/step/path-animation";
import { MusicInitProvider } from "~/pages/video/music/_context/init";
import { MusicReadyProvider } from "~/pages/video/music/_context/ready";

export const Shell = () => {
  return (
    <ShellGlobal>
      <ShellInit>
        {(screenInit) => (
          <ShellReady {...screenInit}>
            <MusicInitProvider>
              <MusicReadyProvider>
              <Pics />
            <Outlet />
            <Hud />
            <PathAnimation />
              </MusicReadyProvider>
           
            </MusicInitProvider>
        
          </ShellReady>
        )}
      </ShellInit>
    </ShellGlobal>
  );
};
