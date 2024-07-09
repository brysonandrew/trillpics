import { useEffect } from "react";
import { useBeatsLoadHandler } from "~/hooks/music/beats/load/handler";

export const useBeatsLoad = () => {
  const handler = useBeatsLoadHandler();
  useEffect(() => {
    handler();
  }, []);
};
