import { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { HomeFooterDirectorsMode } from "~/pages/home/footer/directors-mode";

type TProps = TPropsWithChildren;
export const HomeFooter: FC<
  TProps
> = () => {
  return <HomeFooterDirectorsMode />;
};
