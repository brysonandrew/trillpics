import { TPic } from "~/store/state/pics/types";
import { isNull } from "~/utils/validation/is/null";

export const videoReadEntries = (
  paramValues: string[],
  removingParamValues: string[]
) => {
  const addedCheck = (
    nextName: TPic | null
  ) => {
    return (
      !isNull(nextName) &&
      paramValues.includes(
        nextName
      )
    );
  };
  const removingCheck = (
    name: string
  ) =>
    removingParamValues.includes(name);

  return {
    addedCheck,
    removingCheck,
  };
};
