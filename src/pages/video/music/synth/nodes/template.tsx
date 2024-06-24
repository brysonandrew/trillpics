import type {
  FC,
  PropsWithChildren,
} from "react";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { BackgroundMeshFlat } from "~/components/layout/background/mesh/flat";
import { TypographySm } from "~/components/layout/typography/sm";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { box } from "~uno/rules/box";

type TProps = {
  title: string;
};
export const NodesTemplate: FC<
  PropsWithChildren<TProps>
> = ({ children, title }) => {
  return (
    <div
      className="relative column-stretch"
      style={{
        gap: box.m025,
        ...box.p(box.m025),
      }}
    >
    
        <div
      className="fill bg-black pointer-events-none"
      />
        <div
      className="fill _box-dots opacity-20 pointer-events-none"
      />
      {/* <BackgroundMeshFlat
        style={{ ...box.r.l }}
      /> */}
      <TypographySm>
        {title}
      </TypographySm>
        {children}
    </div>
  );
};
