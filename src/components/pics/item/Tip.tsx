import type {
  FC,
  PropsWithChildren,
} from "react";

export const Tip: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <div className="row gap-2 absolute left-4 top-4 text-xl font-mono">
      {children}
    </div>
  );
};
