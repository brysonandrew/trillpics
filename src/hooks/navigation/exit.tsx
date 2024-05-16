import { useNavigationControls } from "~/hooks/navigation/controls";
import { useKey } from "@brysonandrew/hooks-dom";
import { TPathValue } from "~/types/params";

export const useNavigationExit = (
  pathValue: TPathValue
) => {
  const { togglePathValue } =
    useNavigationControls(pathValue);

  const onKeyDown = (
    event: KeyboardEvent
  ) => {
    if (event.key === "Escape") {
      togglePathValue();
    }
  };
  useKey({ handlers: { onKeyDown } });
  return togglePathValue;
};
