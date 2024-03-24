import type {
  FC,
  PropsWithChildren,
} from "react";

export const Tip: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <div className="row gap-2 absolute left-4 bottom-4 text-xl font-mono">
      {children}
    </div>
  );
};
