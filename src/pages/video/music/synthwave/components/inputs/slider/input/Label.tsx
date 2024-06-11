import type { FC } from "react";
import clsx from "clsx";
import { theme } from "~uno/index";

type TProps = {
  prefix: string;
  value: number;
};
export const Label: FC<TProps> = ({ prefix, value }) => (
  <div className={clsx(theme)}>
    <h4 className="text-sm truncate">
      {[prefix, value ?? null].filter(Boolean).join(" - ")}
    </h4>
  </div>
);
