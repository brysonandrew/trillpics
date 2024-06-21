import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { FooterNavText } from "~/pics/hud/nav/text";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";

type TProps = {
  Icon: FC<TIconsSvgProps>;
} & TDivProps;
export const FooterNavSelected: FC<
  TProps
> = ({
  style,
  Icon,
  children,
  ...props
}) => {
  return (
    <div
      className="relative"
      style={{
        ...style,
      }}
      {...props}
    >
      <div className="absolute bottom-full -translate-y-1 left-1/2 -translate-x-1/2">
        <FooterNavText>
          {children}
        </FooterNavText>
      </div>
      <Icon size={28}/>
    </div>
  );
};
