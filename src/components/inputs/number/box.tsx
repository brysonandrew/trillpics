import type {
  FC,
  PropsWithChildren,
} from "react";

export const InputsNumberBox: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <label className="relative column-stretch shrink grow-0">
      {children}
    </label>
  );
};
