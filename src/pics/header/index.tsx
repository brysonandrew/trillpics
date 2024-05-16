import {
  FC,
  PropsWithChildren,
} from "react";
import { withControlsCheck } from "~/store/hocs/with-controls-check";
import { boxSize } from "~/constants/box/size";

type TProps = PropsWithChildren;
export const Header: FC<TProps> =
  withControlsCheck(({ children }) => {
    return (
      <div />
      // </header>
    );
  });
