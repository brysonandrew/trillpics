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
          <BlurXyWrap>
            <ShellReady {...screenInit}>
              <Pics />
              <Outlet />
              <Hud />
            </ShellReady>
          </BlurXyWrap>
        )}
      </ShellInit>
    </ShellGlobal>
  );
};
