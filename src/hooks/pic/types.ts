import { cellEncrypt } from "~/hooks/pic/cell/encrypt";
import { QUERY_PARAM_KEYS } from "~/hooks/pic/constants";

export type TQueryParamKeys =
  typeof QUERY_PARAM_KEYS;
export type TQueryParamKey =
  keyof TQueryParamKeys;

export type TCellKey = ReturnType<
  typeof cellEncrypt
>;
