import { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { HomeFooterVideo } from "~/pages/home/_footer/video";
import { createPortal } from "react-dom";
import { useContextGrid } from "~/context";

type TProps = TPropsWithChildren;
export const HomeFooter: FC<
  TProps
> = () => {
  const { footerValue } =
    useContextGrid();

  return (
    <>
      {footerValue &&
        createPortal(
          <HomeFooterVideo />,
          footerValue
        )}
    </>
  );
};
