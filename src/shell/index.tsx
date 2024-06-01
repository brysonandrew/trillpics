import { Hud } from "~/pics/hud";
import { Pics } from "~/pics";
import { Outlet } from "react-router";
import { ShellReady } from "~/shell/ready";
import { ShellGlobal } from "~/shell/global";
import { ShellInit } from "~/shell/init";

export const Shell = () => {
  return (
    <ShellGlobal>
      <ShellInit>
        {(screenInit) => (
          <ShellReady {...screenInit}>
            <Pics />
            <Outlet />
            <Hud />
          </ShellReady>
        )}
      </ShellInit>
    </ShellGlobal>
  );
};
