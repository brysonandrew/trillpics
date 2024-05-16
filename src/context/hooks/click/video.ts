import { useClickGrid } from "~/context/hooks/click";

export const useClickVideo = (
  toggle: () => void
) => {
  useClickGrid(toggle);
};
