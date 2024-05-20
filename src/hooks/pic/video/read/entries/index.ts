import { PARAM_CLOSING_VALUE } from "~/hooks/pic/constants";
import { TPic } from "~/store/state/pics/types";
import { isNull } from "~/utils/validation/is/null";
import { isValue } from "~/utils/validation/is/value";
const rx = new RegExp(
  `${PARAM_CLOSING_VALUE}$`
);
type TConfig = string[];
export const videoReadEntries = (
  paramValues: TConfig
) => {
  const addedCheck = (
    nextName: TPic | null
  ) => {
    return (
      !isNull(nextName) &&
      isValue(nextName) &&
      paramValues.length > 0 &&
      paramValues.includes(
        `${nextName}`
      )
    );
  };
  const removingCheck = (v: string) =>
    rx.test(v);
  // v.endsWith(
  //   PARAM_CLOSING_VALUE
  // );
  const decryptRemoving = (
    v: string
  ) => {
    if (removingCheck(v)) {
      return v.replace(rx, "");
    }

    return v;
  };

  const encryptRemoving = (v: string) =>
    `${v}${PARAM_CLOSING_VALUE}`;

  return {
    encryptRemoving,
    decryptRemoving,
    addedCheck,
    removingCheck,
  };
};
