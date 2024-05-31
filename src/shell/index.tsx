import { BlurXyWrap } from "~/components/blur/xy";
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
            <BlurXyWrap>
              <Pics />
              <Outlet />
            </BlurXyWrap>
            <Hud />
          </ShellReady>
        )}
      </ShellInit>
    </ShellGlobal>
  );
};
