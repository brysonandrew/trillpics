import { type FC } from "react";
import { Notifications } from "~/components/notifications";
import { Outlet } from "react-router";
import { Global } from "~/shell/global";
import { DecorationNet } from "~/components/decoration/background/net";
import { Header } from "~/shell/header";
import { Pics } from "~/shell/pics";
import { BlurXy } from "~/components/blur/xy";
import { Footer } from "~/shell/footer";
import { FooterLeft } from "~/shell/footer/left";
import { useOnscreenRef } from "~/shell/header/right/zen-mode/use-idle";
import { HeaderLeft } from "~/shell/header/left";
import { HeaderRight } from "~/shell/header/right";
import { Screen } from "~/shell/screen";
import { FadeV } from "@brysonandrew/fade-edge";
import {
  TPicsTable,
  usePicsTable,
} from "~/shell/pics/use-pics-table";
import { withProviders } from "~/shell/providers/with-providers";
import { useHoverKey } from "~/hooks/use-hover-key";
import { TDivProps } from "@brysonandrew/config-types";
const Outer = ({
  children,
  ...props
}: TDivProps) => {
  const { clear, isNoHover } = useHoverKey();
  return (
    <div
      onMouseEnter={() => !isNoHover && clear()}
      {...props}
    >
      {children}
    </div>
  );
};
const OUTLET_CONTEXT = {
  Header,
  HeaderLeft,
  HeaderRight,
  Screen,
  Footer,
  FooterLeft,
} as const;

export type TOutletContext =
  typeof OUTLET_CONTEXT & {
    picsTable: TPicsTable;
  };
const C = () => {
  const picsTable = usePicsTable();
  useOnscreenRef();
  return (
    <Global>
      <DecorationNet opacityClassValue="opacity-100" />
      <BlurXy />
      <FadeV
        classValue="z-0"
        darkEdgeColor="var(--dark-06)"
        lightEdgeColor="var(--light-02)"
      />
      <Pics
        picsTable={picsTable}
        outerElementType={Outer}
      />
      <Outlet
        context={{
          ...OUTLET_CONTEXT,
          picsTable,
        }}
      />
      <Notifications />
    </Global>
  );
};
export const Shell: FC =
  withProviders(C);
