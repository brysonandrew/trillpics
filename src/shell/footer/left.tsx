import type {
  FC,
  PropsWithChildren,
} from "react";

export const FooterLeft: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <div className="absolute left-0 bottom-0 column-start gap-4">
      {children}
    </div>
  );
};
