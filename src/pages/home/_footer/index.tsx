import { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { HomeFooterVideo } from "~/pages/home/_footer/video";

type TProps = TPropsWithChildren;
export const HomeFooter: FC<
  TProps
> = () => {
  return <HomeFooterVideo />;
};
