import { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { Outlet } from "react-router";

type TProps = TPropsWithChildren;
export const VideoShell: FC<
  TProps
> = () => {

  return (
    <>
      <Outlet />

    </>
  );
};
