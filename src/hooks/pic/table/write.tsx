import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  COLUMNS_COUNT_PARAM_KEY,
  ROWS_COUNT_PARAM_KEY,
  SIZE_PARAM_KEY,
} from "~/hooks/pic/constants";
import { TPicsTable } from "~/store/state/table/types";
import { TTableUpdateCountResult } from "~/store/state/table/update/count";

export const usePicTableWrite = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] =
    useSearchParams();

  const update = ({
    columns,
    rows,
    size,
  }: Pick<TPicsTable, "size"> &
    TTableUpdateCountResult) => {
    searchParams.set(
      SIZE_PARAM_KEY,
      `${size}`
    );
    searchParams.set(
      COLUMNS_COUNT_PARAM_KEY,
      `${columns}`.padStart(4, "0")
    );
    searchParams.set(
      ROWS_COUNT_PARAM_KEY,
      `${rows}`.padStart(4, "0")
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };

  return {
    update,
  };
};
