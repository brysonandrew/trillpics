import { useSearchParams } from "react-router-dom";
import { resolveCellOver } from "~/hooks/pic/cell/over/resolver";

export const useCellOver = () => {
  const [searchParams] =
    useSearchParams();

  return resolveCellOver(searchParams);
};
export type TUseCellOverResult =
  ReturnType<typeof useCellOver>;
