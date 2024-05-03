import { FC, memo } from "react";
import { TPillBProps } from "~/components/buttons/pill/b";
import { PillBHover } from "~/components/buttons/pill/b/hover";

export const ScrollTop: FC<TPillBProps> =
  memo(({ children, ...props }) => {
    return (
      <PillBHover {...props}>
        {children}
      </PillBHover>
    );
  });
