import { useClickGrid } from "~/context/hooks/click";
import { usePicSelected } from "~/hooks/pic/selected";

export const useHomeClickSelect = () => {
  const props = usePicSelected();
  const handle = () => {
    const name = props.names[0]
    if (props.paramValues.includes(name)) {
      props.deselect(name);
      return;
    }
    props.select();
  };
  useClickGrid(handle);
  return props;
};
