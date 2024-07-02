import type {
  FC,
  PropsWithChildren,
} from "react";

export const InputsNumberBox: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <div className="relative column-stretch2">
      {children}
    </div>
  );
};
