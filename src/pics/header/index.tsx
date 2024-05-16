import {
  FC,
  PropsWithChildren,
} from "react";
import { withControlsCheck } from "~/store/hocs/with-controls-check";
import { boxSize } from "~/constants/box/style/size";

type TProps = PropsWithChildren;
export const Header: FC<TProps> =
  withControlsCheck(({ children }) => {
    const { size } = boxSize({
      size: "sm",
    });
    return (
      <div />
      // </header>
    );
  });
