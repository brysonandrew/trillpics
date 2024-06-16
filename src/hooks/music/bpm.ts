import { useTrillPicsStore } from "~/store/middleware";

export const useBpm = () => {
  const { bpm } = useTrillPicsStore(
    ({ bpm }) => ({
      bpm,
    })
  );

  return bpm;
};
