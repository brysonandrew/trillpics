import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";
import { box } from "~uno/rules/box";

type TProps = TDivProps & {
  title: string;
};
export const InputsBox: FC<TProps> = ({
  title,
  style,
  children,
  ...props
}) => {
  return (
    <div
      className="row-space border border-white-02"
      style={{
        // gap: box.m0125,
        // ...box.p(box.m0125),
        gap: box.m025,
        borderRadius: box.radius.m,
        ...box.py(box.m00625),
        ...box.px(box.m0125),
        // paddingLeft: box.m025,
        ...style,
      }}
      {...props}
    >
      <TypographyXxxs>
        {title}
      </TypographyXxxs>
      {children}
    </div>
  );
};
