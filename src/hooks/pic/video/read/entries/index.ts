import { PARAM_CLOSING_VALUE } from "~/hooks/pic/constants";
import { TPic } from "~/store/state/pics/types";
import { isNull } from "~/utils/validation/is/null";
import { isValue } from "~/utils/validation/is/value";
const rx = new RegExp(
  `${PARAM_CLOSING_VALUE}$`
);
export const removingCheck = (
  name: string
) => rx.test(name);

export const decryptRemoving = (
  v: string
) => {
  if (removingCheck(v)) {
    return v.replace(rx, "");
  }

  return v;
};

export const encryptRemoving = (
  v: string
) => `${v}${PARAM_CLOSING_VALUE}`;

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
  const removingCheck = (
    name: string
  ) => rx.test(name);

  const removingInValuesCheck = (
    name: string
  ) =>
    paramValues.some(
      (v) =>
        removingCheck(v) &&
        decryptRemoving(v) === name
    );

  return {
    encryptRemoving,
    decryptRemoving,
    addedCheck,
    removingCheck,
    removingInValuesCheck,
  };
};
