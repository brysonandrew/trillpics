import { createContext, FC, useContext } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";

const CONTEXT = createContext<
  string
>('');
export const useIdContext = () =>
  useContext(CONTEXT);
export const IdProvider: FC<
  TPropsWithChildren<{id:string}>
> = ({ children,id }) => {
  // const id = useMemo(uuidv4, []);
  return (
    <CONTEXT.Provider value={id}>
      {children}
    </CONTEXT.Provider>
  );
};
