import { FC, useState } from "react";
import { TIdProps } from "@brysonandrew/svg";
import { resolveUrlId } from "@brysonandrew/utils-attributes";
type TDoneProps = {
  onDone?(event: Event): void;
};
export type TBaseProps =
  Required<TIdProps> & TDoneProps;
type TProps<T extends TBaseProps> = {
  filterProps: T;
  Filter: FC<T>;
  children(filter?: string): void;
};
export const SelfDestruct = <
  T extends TBaseProps
>({
  filterProps,
  Filter,
  children,
}: TProps<T>) => {
  const [isDone, setDone] =
    useState(false);
  return (
    <>
      {!isDone && (
        <Filter
          onDone={() => setDone(true)}
          {...filterProps}
        />
      )}
      {isDone
        ? children()
        : children(
            resolveUrlId(filterProps.id)
          )}
    </>
  );
};
